import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number is required." }),
  artist: z.string({ required_error: "Please select an artist." }),
  style: z.string({ required_error: "Please select a tattoo style." }),
  placement: z.string().min(2, { message: "Placement details required." }),
  description: z.string().min(10, { message: "Please describe your idea." }),
});

export function BookingForm() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      placement: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Request Sent",
      description: "We'll get back to you shortly to confirm your consultation.",
      className: "bg-background border-primary text-white",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-400 uppercase text-xs tracking-wider">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Vishal Thakur" {...field} className="bg-secondary/50 border-white/10 text-white focus:border-primary focus:ring-primary/20 h-12" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-400 uppercase text-xs tracking-wider">Email</FormLabel>
                <FormControl>
                  <Input placeholder="vishaldream@gmail.com" {...field} className="bg-secondary/50 border-white/10 text-white focus:border-primary focus:ring-primary/20 h-12" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-400 uppercase text-xs tracking-wider">Phone</FormLabel>
                <FormControl>
                  <Input placeholder="8982762718" {...field} className="bg-secondary/50 border-white/10 text-white focus:border-primary focus:ring-primary/20 h-12" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="artist"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-400 uppercase text-xs tracking-wider">Preferred Artist</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-secondary/50 border-white/10 text-white focus:border-primary focus:ring-primary/20 h-12">
                      <SelectValue placeholder="Select an artist" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-secondary border-white/10 text-white">
                    <SelectItem value="alex">Harpal Thakur</SelectItem>
                    <SelectItem value="sarah">Harpal Thakur</SelectItem>
                    <SelectItem value="marcus">Harpal Thakur</SelectItem>
                    <SelectItem value="any">Harpal Thakur</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-400 uppercase text-xs tracking-wider">Tattoo Style</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-secondary/50 border-white/10 text-white focus:border-primary focus:ring-primary/20 h-12">
                    <SelectValue placeholder="Select a style" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-secondary border-white/10 text-white">
                  <SelectItem value="traditional">American Traditional</SelectItem>
                  <SelectItem value="realism">Black & Grey Realism</SelectItem>
                  <SelectItem value="japanese">Japanese / Irezumi</SelectItem>
                  <SelectItem value="fine-line">Fine Line</SelectItem>
                  <SelectItem value="neo-traditional">Neo Traditional</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="placement"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-400 uppercase text-xs tracking-wider">Body Placement</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Left Forearm, Upper Back" {...field} className="bg-secondary/50 border-white/10 text-white focus:border-primary focus:ring-primary/20 h-12" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-400 uppercase text-xs tracking-wider">Project Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe your idea, size, and any reference you have..." 
                  className="bg-secondary/50 border-white/10 text-white focus:border-primary focus:ring-primary/20 min-h-[120px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full h-14 bg-primary text-black font-bold uppercase tracking-widest hover:bg-primary/90 text-sm">
          Request Consultation
        </Button>
      </form>
    </Form>
  );
}
