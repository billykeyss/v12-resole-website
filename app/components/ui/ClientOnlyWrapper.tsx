import dynamic from "next/dynamic";
import { ReactNode } from "react";

interface ClientOnlyWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const ClientOnlyWrapper = ({ children }: ClientOnlyWrapperProps) => {
  return <>{children}</>;
};

// Export a version that disables SSR
export const ClientOnly = dynamic(() => Promise.resolve(ClientOnlyWrapper), {
  ssr: false,
});

export default ClientOnlyWrapper;
