import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TABLEDATA } from "@/helpers/table.helpers";

export function TableDemo() {
  return (
    <Table className="border-x">
      <TableHeader>
        <TableRow className="bg-[#634aff] text-white">
          <TableHead className="w-[200px] text-white">User</TableHead>
          <TableHead className="text-white ">Last chatted</TableHead>
          <TableHead className="text-white ">Message</TableHead>
          <TableHead className="text-white text-right">Chat</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {TABLEDATA.map((items, index) => (
          <TableRow key={index} className="py-8">
            <TableCell className="py-4 capitalize">{items.user}</TableCell>
            <TableCell>{items.lastchatted}</TableCell>
            <TableCell>{items.message}</TableCell>
            <TableCell className="text-right">{items.chat}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
