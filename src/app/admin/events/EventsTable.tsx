// "use client";

// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Input } from "@/components/ui/input";
// import { IoMdMore as MoreVertIcon } from "react-icons/io";
// import Link from "next/link";
// const deleteEvent = () => {};
// const getEvents = () => {};

// export default function Events() {
//   const [filter, setFilter] = React.useState("");
//   const [events, setEvents] = React.useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const filteredList = events.filter(
//     (event) =>
//       event.title.toLowerCase().includes(filter) ||
//       event.startDate.toLowerCase().includes(filter) ||
//       event.description.toLowerCase().includes(filter)
//   );

//   const SlicedFilteredList = filteredList.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   function Filter(e) {
//     const key = e.target.value.trim().toLowerCase();
//     setFilter(key);
//   }

//   async function Delete(id) {
//     await deleteEvent(id);
//     const data = await getEvents();
//     setEvents(data);
//   }

//   React.useEffect(() => {
//     getEvents().then(setEvents);
//   }, []);

//   return (
//     <div className="max-w-7xl min-h-screen md:p-4">
//       <div className="py-4 flex items-center justify-between">
//         <Input
//           className="max-w-sm mx-2 md:mx-0"
//           placeholder="Search user..."
//           onChange={Filter}
//         />
//         <Link href="/admin/events/new">
//           <Button variant="contained">
//             <span className="text-nowrap">+ Add new</span>
//           </Button>
//         </Link>
//       </div>

//       <div className="w-full md:max-w-[calc(100vw-288px)]">
//         <Table className="border">
//           <TableHeader className="bg-muted">
//             <TableRow>
//               <TableHead className="sr-only">Image</TableHead>
//               <TableHead className="font-bold">Event Name</TableHead>
//               <TableHead className="font-bold">Event Date</TableHead>
//               <TableHead className="font-bold">Description</TableHead>
//               <TableHead className="font-bold">Link</TableHead>
//               <TableHead className="sr-only">Action</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {SlicedFilteredList.length > 0 ? (
//               SlicedFilteredList.map((event) => (
//                 <TableRow key={event._id}>
//                   <TableCell className="min-w-20">
//                     <img className="size-10" src={"/logo.png"} alt="" />
//                   </TableCell>
//                   <TableCell className="text-nowrap">{event.title}</TableCell>
//                   <TableCell className="text-nowrap">
//                     {new Date(event.startDate).toLocaleDateString("en-UK", {
//                       month: "short",
//                       day: "2-digit",
//                       year: "numeric",
//                     })}
//                   </TableCell>
//                   <TableCell>
//                     <span className="line-clamp-1 break-words min-w-64">
//                       {event.description}
//                     </span>
//                   </TableCell>
//                   <TableCell>
//                     <span className="line-clamp-1 break-words max-w-64">
//                       {event.link}
//                     </span>
//                   </TableCell>
//                   <TableCell>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger>
//                         <MoreVertIcon />
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent>
//                         <DropdownMenuItem>View</DropdownMenuItem>
//                         <DropdownMenuItem asChild>
//                           <Link to={"/admin/events/" + event._id}>Edit</Link>
//                         </DropdownMenuItem>
//                         <DropdownMenuItem>Hide</DropdownMenuItem>
//                         <DropdownMenuItem
//                           onClick={() => Delete(event._id)}
//                           className="text-destructive focus:bg-destructive focus:text-destructive-foreground"
//                         >
//                           Delete
//                         </DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={4} className="h-24 text-center">
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>

//       <TablePagination
//         className="border w-full bg-muted"
//         style={{ color: "black" }}
//         component="div"
//         count={filteredList.length} // Total number of invoices
//         page={page}
//         onPageChange={handleChangePage}
//         rowsPerPage={rowsPerPage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//         rowsPerPageOptions={[5, 8, 10, 25]} // Options for rows per page
//       />
//     </div>
//   );
// }

import React from 'react'

function EventsTable() {
  return (
    <div>EventsTable</div>
  )
}

export default EventsTable