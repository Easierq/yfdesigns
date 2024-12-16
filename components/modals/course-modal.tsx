"use client";

// import { useQuery } from "@tanstack/react-query";
import { useCardModal } from "@/hooks/use-card-modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { fetcher } from "@/lib/fetcher";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type CourseType = {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
};

export const CourseModal = () => {
  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);

  // const { data: cardData } = useQuery<CourseType>({
  //   queryKey: ["course", id],
  //   queryFn: () => fetcher(`/api/courses/${id}`),
  // });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="">
        <DialogPrimitive.Close className="bg-slate-200 dark:bg-slate-100 rounded-md p-1 absolute left-4 top-4 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <ArrowLeft className="h-5 w-auto text-slate-500" />
        </DialogPrimitive.Close>
        <div className="overflow-scroll hidden-scrollbar">
          {/* <div className="flex flex-col gap-4 md:flex-row py-6">
            <div className="basis-1/2 md:basis-1/3 h-auto p-5 bg-blue-400"></div>
            <div className="basis-1/2 md:basis-2/3 h-auto p-5 bg-blue-400"></div>
          </div> */}
          <div className="space-y-3 pt-12 pb-6 flex flex-col justify-center items-center text-center px-4 md:px-12">
            <div className="rounded-md bg-slate-100 overflow-hidden">
              <Image
                width={200}
                height={200}
                src="/lap.jpg"
                alt="c-pic"
                className="object-cover"
              />
            </div>
            <div className="space-y-2 py-2">
              <h2 className="text-2xl text-slate-700 dark:text-slate-300 font-semibold">
                DKNG Studios
              </h2>
              <p className="text-slate-500 dark:text-slate-200 text-sm font-medium w-full">
                Graphics design and photoshop studies based in osogbo
              </p>
              <div className="h-[1px] bg-slate-400 w-[60%] mx-auto" />
            </div>
            <div className="space-y-1 py-2">
              <p className="text-[12px] text-slate-400 dark:text-slate-300 font-semibold">
                Session
              </p>
              <h2 className="text-[16px] text-slate-700 dark:text-slate-300 font-semibold">
                Illustrator and photoshop
              </h2>
              <p className="text-slate-500 dark:text-slate-200 text-sm font-medium w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                rem eligendi at quos, dolorem quaerat minus ipsa vero quod
                ratione, possimus mollitia a amet enim modi beatae! Voluptatum
                alias atque consequatur ipsam eveniet nobis distinctio facilis,
                amet esse, similique nesciunt.
              </p>
            </div>
            <Button variant="default" className="w-max px-8" onClick={() => {}}>
              Book Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
