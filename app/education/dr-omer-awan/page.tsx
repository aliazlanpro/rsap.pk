import XIcon from "@/components/icons/x";
import { getPlaylist, getVideo } from "./getVideo";
import InstagramIcon from "@/components/icons/instagram";
import LinkedInIcon from "@/components/icons/linkedin";
import FacebookIcon from "@/components/icons/facebook";
import { OpenInNewWindowIcon, PlayIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import YoutubeIcon from "@/components/icons/youtube";

export default async function EducationDrOmerAwan() {
  const data = await getVideo("UCV_WMc6wSrrYvCio1J7VwIg");
  const playlists = {
    playlist1: {
      id: "PLFqKuvTXsoesCARWn88RYbgD7qvyOtC96",
      title: "Match & Residency Tips",
      thumbnail: "https://i.ytimg.com/vi/Kv7yfZOyLY4/maxresdefault.jpg",
    },
    playlist2: {
      id: "PLFqKuvTXsoevG-050jL0RZ6kDzLr9PjO3",
      title: "Musculoskeletal Radiology Unknown Case Series",
      thumbnail: "https://i.ytimg.com/vi/D-ePRsadSVc/maxresdefault.jpg",
    },
  };
  const playlist1 = await getPlaylist(playlists.playlist1.id);
  const playlist2 = await getPlaylist(playlists.playlist2.id);

  return (
    <div className="py-20 container-x ">
      <div className="border p-6 flex flex-col-reverse md:flex-row items-center md:items-start justify-between rounded-xl shadow">
        <div>
          <h1 className="text-4xl font-bold mt-5 md:mt-0">
            Dr. Omer A. Awan, MD MPH CIIP
          </h1>
          <div className="flex gap-4 items-center mt-5">
            <a href="https://www.youtube.com/@AwanRad" target="_blank">
              <YoutubeIcon className="size-8" />
            </a>
            <a href={`http://twitter.com/AwanRad`}>
              <XIcon className="size-7 fill-foreground" />
            </a>
            <a href="https://www.linkedin.com/in/omer-awan-md-mph-ciip-6243556b/">
              <LinkedInIcon className="size-7" />
            </a>
            <a href={`http://instagram.com/omerawanmd`}>
              <InstagramIcon className="size-8" />
            </a>

            <a href="https://www.facebook.com/profile.php?id=100072542480638">
              <FacebookIcon className="size-8" />
            </a>
          </div>
          <div className="prose dark:prose-dark prose-zinc mt-5">
            <p>Bio here</p>
          </div>
        </div>
        <img
          src="/images/boa/junaid.jpg"
          alt="Dr. Omer Awan"
          className="rounded-md size-96 object-cover"
        />
      </div>
      <h2 className="text-4xl font-semibold mt-16 hover:underline hover:underline-offset-4">
        <a href="https://www.youtube.com/@AwanRad" target="_blank">
          Latest Videos from MedEdPage (@AwanRad){" "}
          <OpenInNewWindowIcon className=" inline-flex size-8 " />
        </a>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 my-7 gap-4 md:grid-cols-4 ">
        {data.items.map((item) => (
          <div key={item.id.videoId}>
            <div className="relative  h-0 w-full pb-[56.25%]">
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
      <a href="https://www.youtube.com/@AwanRad" target="_blank">
        <Button variant="secondary" text="See all videos" />
      </a>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        <div className="rounded-xl border p-3 sm:p-6 w-full">
          <h3 className="text-2xl font-semibold px-3 pt-3 sm:px-0 sm:pt-0">
            {playlists.playlist1.title}
          </h3>
          <a
            href={`https://www.youtube.com/playlist?list=${playlists.playlist1.id}`}
            className="text-sm mt-2 underline underline-offset-2 font-medium  px-3 pt-3 sm:px-0 sm:pt-0"
            target="_blank"
          >
            View playlist
          </a>
          <div className="flex flex-col mt-8">
            {playlist1.items.map((item, index) => (
              <a
                key={item.snippet.resourceId.videoId}
                href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
                className="p-3 hover:bg-muted rounded-xl"
                target="_blank"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="font-medium text-muted-foreground hidden sm:block">
                    {index + 1}
                  </div>
                  <img
                    src={item.snippet.thumbnails.medium.url}
                    className=" sm:max-w-44 h-auto flex-shrink-0 rounded-lg"
                  />
                  <p className="font-semibold">{item.snippet.title}</p>
                </div>
              </a>
            ))}
          </div>
          <a
            href={`https://www.youtube.com/playlist?list=${playlists.playlist1.id}`}
            target="_blank"
          >
            <Button variant="secondary" text="View playlist" className="mt-6" />
          </a>
        </div>
        <div className="rounded-xl border p-6 w-full">
          <h3 className="text-2xl font-semibold">
            {playlists.playlist2.title}
          </h3>
          <a
            href={`https://www.youtube.com/playlist?list=${playlists.playlist2.id}`}
            className="text-sm mt-2 underline underline-offset-2 font-medium"
            target="_blank"
          >
            View playlist
          </a>
          <div className="flex flex-col mt-8">
            {playlist2.items.map((item, index) => (
              <a
                key={item.snippet.resourceId.videoId}
                href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
                className="p-3 hover:bg-muted rounded-xl"
                target="_blank"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="font-medium text-muted-foreground hidden sm:block">
                    {index + 1}
                  </div>
                  <img
                    src={item.snippet.thumbnails.medium.url}
                    className=" sm:max-w-44 h-auto flex-shrink-0 rounded-lg"
                  />
                  <p className="font-semibold">{item.snippet.title}</p>
                </div>
              </a>
            ))}
          </div>
          <a
            href={`https://www.youtube.com/playlist?list=${playlists.playlist2.id}`}
            target="_blank"
          >
            <Button variant="secondary" text="View playlist" className="mt-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
