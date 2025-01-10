import { Box, useToast, Spinner } from "@sanity/ui";
import { NavbarProps } from "sanity";
import { useState } from "react";
import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";
import { dispatchWorkflow } from "@/app/actions/github";
import clsx from "clsx";

export function CustomNavbar(props: NavbarProps) {
  const { renderDefault } = props;
  const [isDeploying, setIsDeploying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const toast = useToast();

  const deploySite = async () => {
    try {
      await dispatchWorkflow();
      toast.push({
        status: "success",
        title: "Deployment Triggered",
        description: "Your site is being deployed!",
      });
    } catch (error: unknown) {
      toast.push({
        status: "error",
        title: "Deployment Failed",
        description: "Server error",
      });
    }
  };

  const handleDeploy = async () => {
    setIsDeploying(true);
    await deploySite();

    const expectedTime = 60;

    setTimeLeft(expectedTime);

    setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    setTimeout(() => {
      setIsDeploying(false);
    }, expectedTime * 1000);
  };

  const checkStatus = () => {
    redirect(
      "https://github.com/velocity-iiitdwd/iiitdwd.ac.in/actions/",
      RedirectType.push
    );
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-2 p-2 bg-slate-950">
        <button
          onClick={handleDeploy}
          disabled={isDeploying}
          className={clsx(
            "flex items-center justify-center px-4 py-1 text-white bg-slate-800 rounded-md transition duration-200",
            isDeploying
              ? "bg-slate-600 cursor-not-allowed"
              : "hover:bg-slate-700"
          )}
        >
          {isDeploying ? (
            <>
              <Spinner muted />
              <span className="ml-2">Deploying... {timeLeft} sec</span>
            </>
          ) : (
            "Deploy"
          )}
        </button>
        <button
          onClick={checkStatus}
          className="flex items-center justify-center bg-slate-400 rounded-full transition duration-200 size-5"
          title="Check GitHub Action Status"
        >
          <Image src="/info.svg" height={48} width={48} alt="info" />
        </button>
      </div>
      <Box flex={1}>{renderDefault(props)}</Box>
    </div>
  );
}
