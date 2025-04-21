import { Box, useToast, Spinner } from '@sanity/ui';
import { NavbarProps } from 'sanity';
import { useState } from 'react';
import Image from 'next/image';
import { redirect, RedirectType } from 'next/navigation';
import { dispatchWorkflow } from '@/app/actions/github';
import clsx from 'clsx';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import FTPComponent from '@/components/FTPComponent';

export function CustomNavbar(props: NavbarProps) {
  const { renderDefault } = props;
  const [isDeploying, setIsDeploying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isBetaDeploy, setIsBetaDeploy] = useState(false);
  const toast = useToast();

  const deploySite = async () => {
    try {
      await dispatchWorkflow({ isBetaDeploy });
      toast.push({
        status: 'success',
        title: 'Deployment Triggered',
        description: `Deploying to ${isBetaDeploy ? 'Beta' : 'Production'} environment`,
      });
    } catch (error: unknown) {
      setIsDeploying(false);
      setTimeLeft(0);
      if (error instanceof Error) {
        toast.push({
          status: 'error',
          title: 'Deployment Failed',
          description: error.message || 'Server error',
        });
      } else {
        toast.push({
          status: 'error',
          title: 'Deployment Failed',
          description: 'An unknown error occurred',
        });
      }
    }
  };

  const handleDeploy = async () => {
    const expectedTime = 60;

    setIsDeploying(true);
    setTimeLeft(expectedTime);

    await deploySite();

    const interval = setInterval(() => {
      if (isDeploying) {
        setTimeLeft((prev) => prev - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    setTimeout(() => {
      setIsDeploying(false);
    }, expectedTime * 1000);
  };

  const checkStatus = () => {
    redirect(
      'https://github.com/velocity-iiitdwd/iiitdwd_2025/actions/',
      RedirectType.push
    );
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-3 p-2 bg-slate-950">
        <div className="flex items-center gap-2">
          <span
            className={`text-sm w-[70px] text-right ${!isBetaDeploy ? 'text-white font-bold' : 'text-gray-400'}`}
          >
            Production
          </span>
          <div className="w-[40px] flex justify-center">
            <Switch checked={isBetaDeploy} onCheckedChange={setIsBetaDeploy} />
          </div>
          <span
            className={`text-sm w-[40px] ${isBetaDeploy ? 'text-white font-semibold' : 'text-gray-100'}`}
          >
            Beta
          </span>
        </div>
        <FTPDialogTrigger />
        <button
          onClick={handleDeploy}
          disabled={isDeploying}
          className={clsx(
            'flex items-center justify-center px-4 py-1 text-white bg-slate-800 rounded-md transition duration-200',
            isDeploying
              ? 'bg-slate-600 cursor-not-allowed'
              : 'hover:bg-slate-700'
          )}
        >
          {isDeploying ? (
            <>
              <Spinner muted />
              <span className="ml-2">Deploying... {timeLeft} sec</span>
            </>
          ) : (
            `Deploy to ${isBetaDeploy ? 'Beta Server' : 'Production'}`
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

function FTPDialogTrigger() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center px-4 py-1 text-white bg-slate-800 rounded-md transition duration-200 hover:bg-slate-700">
          File management
        </button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-none sm:max-w-full md:max-w-[90vw] z-[1000] border-2 border-zinc-500 max-h-[95vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>File management via FTP</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <FTPComponent />
      </DialogContent>
    </Dialog>
  );
}
