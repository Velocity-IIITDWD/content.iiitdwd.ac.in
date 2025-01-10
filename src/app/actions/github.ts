"use server";
import { Octokit } from "@octokit/core";

type RunType = {
  status: string;
  id: string;
};

export async function dispatchWorkflow() {
  const repoURL = process.env.DEPLOY_REPO_URL;
  const workflow = process.env.DEPLOY_WORKFLOW;
  const ref = process.env.DEPLOY_REF;

  try {    
    const octokit = new Octokit({
      auth: process.env.GITHUB_PAT,
    });
    
    // Get all workflow runs to check the uncompleted ones
    const { data: runs } = await octokit.request(
      `GET /repos/${repoURL}/actions/workflows/${workflow}/runs`,
      {
        per_page: 100,
      }
    );
    
    const unCompletedRuns = runs.workflow_runs.filter(
      (run: RunType) => run.status !== "completed"
    );
    
    if (unCompletedRuns.length > 0) {
      // Cancel the uncompleted ones
      for (const run of unCompletedRuns) {
        await octokit.request(`POST /repos/${repoURL}/actions/runs/${run.id}/cancel`, {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        });
        console.log(`Cancelled workflow run: ${run.id}`);
      }
    }
    
    // Dispatch a new workflow run
    await octokit.request(
      `POST /repos/${repoURL}/actions/workflows/${workflow}/dispatches`,
      { ref }
    );
    
    console.log("Dispatched new workflow run");
  } catch (error) {
    throw error;
  }
}
