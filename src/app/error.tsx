"use client";
import AnimatedBackground from "@/components/AnimatedBackground";
import OutlineButton from "@/components/UI/OutlineButton";
import PrimaryButton from "@/components/UI/PrimaryButton";

const Error = () => {
    return <div className="flex flex-col items-center gap-10 py-18 w-screen min-h-screen">
        <AnimatedBackground />
        <div className="flex flex-col items-center gap-8 max-w-[700px] text-5xl text-center">
            <p className="text-9xl shimmer-text font-bold">404</p>
            <h1 className="font-bold">Oops! Page Not Found</h1>
            <p className="text-text/70 text-xl">The page you&apos;re looking for seems to have wandered off into the task void. Don&apos;t worry, we&apos;ll help you find your way back!</p>
        </div>
        <div className="flex gap-5 max-w-[550px] w-full">
            <PrimaryButton path="/" className="py-4 w-1/3">🏠 Go Home</PrimaryButton>
            <OutlineButton path="-1" className="py-4 w-1/3">← Go Back</OutlineButton>
            <OutlineButton path="/dashboard" className="py-4 w-1/3">📊 Dashboard</OutlineButton>
        </div>
    </div>
}

export default Error;
