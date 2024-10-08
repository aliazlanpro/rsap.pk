import { cn } from "@/utils/shadcn";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { ProgressBarLink } from "../global/progress-bar";

type Props = {
  title: string;
  description: string;
  image: string;
  color: string;
  lead?: {
    name: string;
    position: string;
    affiliation: string;
    email: string;
    picture: string;
  };
};

export function CommitteePage(props: Props) {
  const { title, description, image, lead, color } = props;
  return (
    <div className="container-x py-20">
      <div
        className={cn(
          `text-center text-4xl font-bold`,

          color !== "text-[#0e0021]" && color
        )}
      >
        {title}
      </div>
      <div className="flex gap-10  items-center md:items-start md:justify-between flex-col-reverse md:flex-row mt-10">
        <div>
          <p className="prose dark:prose-invert mx-auto">{description}</p>
          {lead && (
            <AuthorCard lead={lead} color={color} className="hidden lg:flex" />
          )}
        </div>
        <img
          src={image}
          alt={title}
          className=" max-w-[400px] w-full  rounded-xl shadow-xl"
        />
      </div>
      {lead && (
        <AuthorCard lead={lead} color={color} className="flex lg:hidden" />
      )}
    </div>
  );
}

function AuthorCard({
  lead,
  color,
  className,
}: {
  lead: {
    name: string;
    position: string;
    affiliation: string;
    email: string;
    picture: string;
  };
  color: string;
  className?: string;
}) {
  return (
    <ProgressBarLink
      href={`/board-of-directors/${lead.name
        .toLowerCase()
        .replaceAll(" ", "-")}`}
      className={cn(
        " mt-10 p-5 border rounded-2xl transition-colors duration-300 hover:border-transparent hover:bg-primary group",

        className
      )}
    >
      <div className="flex flex-col sm:flex-row items-center  gap-6 ">
        <img
          src={`/images/bod/${lead.picture}`}
          className=" flex-shrink-0 size-28 object-cover rounded-full "
          alt={lead.name}
        />
        <div className=" text-center sm:text-left">
          <div
            className={cn(
              "font-bold text-2xl ",
              color !== "text-[#0e0021]" && color,
              "group-hover:text-white"
            )}
          >
            {lead.position}
          </div>
          <h3 className="font-semibold text-xl mt-3 group-hover:!text-white">
            {lead.name}
          </h3>
          <p className="mt-1 mb-2 text-sm text-muted-foreground group-hover:text-zinc-300">
            {lead.affiliation}
          </p>
          <a
            className=" underline font-medium group-hover:text-zinc-300"
            href="mailto:lrp.radsapakistan@gmail.com"
          >
            <EnvelopeClosedIcon className=" inline-flex mr-2" />
            {lead.email}
          </a>
        </div>
      </div>
    </ProgressBarLink>
  );
}
