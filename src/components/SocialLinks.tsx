"use client";
import {IconLink} from "@/components/Icon";

import {
    github_url,
    linkedin_url,
    spotify_url,
    discord_url,
    instagram_url,
    email_url,
} from "@/utils/Consts";

export function SocialLinks() {
    return (
      <div className="relative flex w-full flex-row items-center justify-center gap-4 pt-0.5">
        <IconLink id="icon-linkedin" tooltip="Linkedin" href={linkedin_url} src="/Icons/linkedin_icon.png" />
        <IconLink id="icon-github" tooltip="Github" href={github_url} src="/Icons/github_icon.png" />
        <IconLink id="icon-email" tooltip="Email" href={email_url} src="/Icons/email_icon.png" />
        <IconLink id="icon-spotify" tooltip="Spotify" href={spotify_url} src="/Icons/spotify_icon.png" />
        <IconLink id="icon-discord" tooltip="Discord" href={discord_url} src="/Icons/discord_icon.png" />
        <IconLink id="icon-insta" tooltip="Instragram" href={instagram_url} src="/Icons/instagram_icon.png" />
      </div>
    );
  }