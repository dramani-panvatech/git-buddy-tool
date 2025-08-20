import { useState } from "react";
import { 
  User, 
  Settings, 
  LogOut, 
  CreditCard, 
  Bell, 
  Shield, 
  HelpCircle,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface UserMenuProps {
  isAuthenticated?: boolean;
  user?: {
    name: string;
    email: string;
    avatar?: string;
    role?: string;
    notifications?: number;
  };
}

const UserMenu = ({ 
  isAuthenticated = false, 
  user = {
    name: "Sarah Johnson",
    email: "sarah@carechakra.com",
    role: "Attorney",
    notifications: 3
  }
}: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been safely logged out of your account.",
    });
    // Here you would typically handle the actual logout logic
    setIsOpen(false);
  };

  const handleMenuItemClick = (action: string) => {
    toast({
      title: `${action} clicked`,
      description: `Navigating to ${action.toLowerCase()}...`,
    });
    setIsOpen(false);
  };

  // If not authenticated, show login/signup buttons
  if (!isAuthenticated) {
    return (
      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="sm" className="text-sm font-medium">
          Sign In
        </Button>
        <Button size="sm" className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-light hover:to-accent text-accent-foreground font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          Get Started
        </Button>
      </div>
    );
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-10 px-3 rounded-full hover:bg-primary/5 transition-all duration-300"
        >
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary font-semibold">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              {user.notifications && user.notifications > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">
                    {user.notifications > 9 ? '9+' : user.notifications}
                  </span>
                </div>
              )}
            </div>
            <div className="hidden md:block text-left">
              <div className="flex items-center space-x-1">
                <span className="text-sm font-semibold text-foreground">
                  {user.name}
                </span>
                <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </div>
              <span className="text-xs text-muted-foreground">
                {user.role}
              </span>
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent 
        className="w-72 bg-background/95 backdrop-blur-xl border-border/50 shadow-2xl rounded-2xl p-2"
        align="end"
        forceMount
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.15 }}
        >
          {/* User Info Header */}
          <div className="px-3 py-3 border-b border-border/50">
            <div className="flex items-center space-x-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary font-semibold text-lg">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground truncate">
                  {user.name}
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  {user.email}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="secondary" className="text-xs">
                    {user.role}
                  </Badge>
                  {user.notifications && user.notifications > 0 && (
                    <Badge variant="destructive" className="text-xs">
                      {user.notifications} new
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Link */}
          <DropdownMenuItem asChild className="px-3 py-3 cursor-pointer hover:bg-primary/5 rounded-lg">
            <Link to="/dashboard" className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="font-medium">Dashboard</span>
                <p className="text-xs text-muted-foreground">View your overview</p>
              </div>
            </Link>
          </DropdownMenuItem>

          {/* Menu Items */}
          <DropdownMenuItem 
            className="px-3 py-3 cursor-pointer hover:bg-primary/5 rounded-lg"
            onClick={() => handleMenuItemClick('Account Settings')}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Settings className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="font-medium">Account Settings</span>
                <p className="text-xs text-muted-foreground">Manage your profile</p>
              </div>
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem 
            className="px-3 py-3 cursor-pointer hover:bg-primary/5 rounded-lg"
            onClick={() => handleMenuItemClick('Notifications')}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
                <Bell className="w-4 h-4 text-primary" />
                {user.notifications && user.notifications > 0 && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Notifications</span>
                  {user.notifications && user.notifications > 0 && (
                    <Badge variant="destructive" className="text-xs ml-2">
                      {user.notifications}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">View recent activity</p>
              </div>
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem 
            className="px-3 py-3 cursor-pointer hover:bg-primary/5 rounded-lg"
            onClick={() => handleMenuItemClick('Billing')}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="font-medium">Billing & Plans</span>
                <p className="text-xs text-muted-foreground">Manage subscription</p>
              </div>
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem 
            className="px-3 py-3 cursor-pointer hover:bg-primary/5 rounded-lg"
            onClick={() => handleMenuItemClick('Security')}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="font-medium">Security</span>
                <p className="text-xs text-muted-foreground">Password & 2FA</p>
              </div>
            </div>
          </DropdownMenuItem>

          <DropdownMenuSeparator className="my-2" />

          <DropdownMenuItem 
            className="px-3 py-3 cursor-pointer hover:bg-primary/5 rounded-lg"
            onClick={() => handleMenuItemClick('Help & Support')}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <HelpCircle className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="font-medium">Help & Support</span>
                <p className="text-xs text-muted-foreground">Get assistance</p>
              </div>
            </div>
          </DropdownMenuItem>

          <DropdownMenuSeparator className="my-2" />

          <DropdownMenuItem 
            className="px-3 py-3 cursor-pointer hover:bg-destructive/5 rounded-lg text-destructive focus:text-destructive"
            onClick={handleLogout}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                <LogOut className="w-4 h-4 text-destructive" />
              </div>
              <div>
                <span className="font-medium">Sign Out</span>
                <p className="text-xs text-destructive/70">Logout of your account</p>
              </div>
            </div>
          </DropdownMenuItem>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;