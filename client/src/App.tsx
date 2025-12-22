import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Contact from "@/pages/contact";
import Quotation from "@/pages/quotation";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import PageTransition from "@/components/ui/PageTransition";
import Preloader from "@/components/ui/Preloader";
import { useAudio } from "@/lib/audio";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import PrivacyPolicy from "@/pages/privacy-policy";
import Launch from "@/pages/launch";
import ScrollToTop from "@/components/ui/ScrollToTop";

function Router() {
  return (
    <PageTransition>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Launch} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/quotation" component={Quotation} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
      
 
        <Route component={NotFound} />
      </Switch>
    </PageTransition>
  );
}

function SoundController() {
  const { toggleMute, isMuted } = useAudio();
  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 bg-black/50 backdrop-blur-md border-white/10 hover:bg-white/10 text-white"
      onClick={toggleMute}
    >
      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
    </Button>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>

        <SmoothScroll>
          <CustomCursor />
          <Toaster />
          <SoundController />
          <Router />
        </SmoothScroll>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
