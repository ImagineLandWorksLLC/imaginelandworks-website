import { projects } from "@data/projects";
import { serviceSections } from "@data/serviceSections";
import { getPublishedProjects } from "@utils/projects";
import { serviceImageExists } from "@utils/images";

/** Validated, publicly visible projects. Throws at build time if a published project is incomplete. */
export const publishedProjects = getPublishedProjects(projects, {
  serviceSlugs: serviceSections.map((s) => s.anchor),
  imageExists: serviceImageExists,
});
