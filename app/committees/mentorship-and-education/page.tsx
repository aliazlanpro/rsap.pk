import { CommitteePage } from "@/components/block/committee-page";
import { committees } from "@/utils/constants";

export default function Page() {
  const page = committees.mentorshipAndEducation;
  return <CommitteePage {...page} />;
}
