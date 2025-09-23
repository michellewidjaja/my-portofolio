import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Badge from "@/components/ui/Badge";
import { FULL_PROJECTS } from "@/constants";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "react-feather";
import Link from "next/link";

export default function Projects() {
  return (
    <section>
      <Link href="/">
        <Button variant="link" className="px-0 my-4 group"><ArrowLeft className="transition-transform duration-200 group-hover:-translate-x-1" />Back to Home</Button>
      </Link>
      <div className={`group cursor-pointer font-poppins text-2xl tracking-widest uppercase mb-4 md:mb-12 transition-all duration-500 animate-slideDown`}>
        All Projects
        <div className="border-b-[3px] border-blue-500 w-8 mt-1 transition-all duration-300 ease-in-out group-hover:w-12"></div>
      </div>
      <Table className="rounded-md transition-all duration-500 animate-slideUp">
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold dark:text-gray-200">Year</TableHead>
            <TableHead className="font-semibold dark:text-gray-200">Project</TableHead>
            <TableHead className="font-semibold dark:text-gray-200">Made at</TableHead>
            <TableHead className="hidden md:table-cell font-semibold dark:text-gray-200">Built with</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {FULL_PROJECTS.map((project, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{project.year}</TableCell>
              <TableCell>{project.title}</TableCell>
              <TableCell>{project.made_at}</TableCell>
              <TableCell className="hidden md:block">
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {project.stacks.map((stack, key) => (
                    <Badge key={key} text={stack} />
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
