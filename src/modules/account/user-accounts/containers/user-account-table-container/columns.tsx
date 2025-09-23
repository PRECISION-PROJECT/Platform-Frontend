"use client";
import { Badge } from "@/components/ui/badge";
import { DataTableColumnHeader } from "@/components/shared/data-table/data-table-column-header";
import { Column, ColumnDef } from "@tanstack/react-table";
import { CheckCircle2, Text, XCircle } from "lucide-react";
import Image from "next/image";
import { CellAction } from "./cell-action";
import { IUserResponse } from "@/apis/auths";
import { format, formatDate } from "date-fns";

const STATUS_OPTIONS = [
  {
    value: "1",
    label: "Active",
  },
  {
    value: "2",
    label: "Inactive",
  },
];

export const columns: ColumnDef<IUserResponse>[] = [
  {
    id: "id",
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const id = row.getValue("id");
      if (!id) return <div>--</div>;
      return <div>{id as string}</div>;
    },
    meta: {
      label: "User Id",
    },
  },
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl: string = row.getValue("imageUrl");
      if (!imageUrl) {
        return <div>-</div>;
      }
      return (
        <div className="relative aspect-square">
          <Image
            src={imageUrl}
            alt={row.getValue("firstName")}
            fill
            className="rounded-lg"
          />
        </div>
      );
    },
  },
  {
    id: "search",
    accessorKey: "firstName",
    header: ({ column }: { column: Column<IUserResponse, unknown> }) => (
      <DataTableColumnHeader column={column} title="First Name" />
    ),
    cell: ({ cell }) => (
      <div>{cell.getValue<IUserResponse["firstName"]>()}</div>
    ),
    meta: {
      label: "First Name",
      placeholder: "Search user by name...",
      variant: "text",
      icon: Text,
    },
    enableColumnFilter: true,
  },
  {
    id: "lastName",
    accessorKey: "lastName",
    header: ({ column }: { column: Column<IUserResponse, unknown> }) => (
      <DataTableColumnHeader column={column} title="Last Name" />
    ),
    cell: ({ cell }) => <div>{cell.getValue<IUserResponse["lastName"]>()}</div>,
    enableColumnFilter: true,
    meta: {
      label: "Last Name",
    },
  },
  {
    id: "email",
    accessorKey: "email",
    header: ({ column }: { column: Column<IUserResponse, unknown> }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ cell }) => (
      <div>{cell.getValue<IUserResponse["email"]>() ?? "-"}</div>
    ),
    enableColumnFilter: true,
    meta: {
      label: "Email",
    },
  },
  {
    id: "role",
    accessorKey: "role",
    header: ({ column }: { column: Column<IUserResponse, unknown> }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ cell }) => <div>{cell.getValue<IUserResponse["role"]>()}</div>,
    enableColumnFilter: true,
    meta: {
      label: "Role",
    },
  },
  {
    id: "status",
    accessorKey: "status",
    header: ({ column }: { column: Column<IUserResponse, unknown> }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ cell }) => {
      const status = cell.getValue<IUserResponse["status"]>();
      const Icon = status === "active" ? CheckCircle2 : XCircle;

      return (
        <Badge variant="outline" className="capitalize">
          <Icon />
          {status}
        </Badge>
      );
    },
    enableColumnFilter: true,
    meta: {
      label: "Status",
      variant: "multiSelect",
      options: STATUS_OPTIONS,
    },
  },
  {
    id: "updatedAt",
    accessorKey: "updatedAt",
    header: ({ column }: { column: Column<IUserResponse, unknown> }) => (
      <DataTableColumnHeader column={column} title="Updated At" />
    ),
    cell: ({ row }) => {
      const updatedAt = row.getValue("updatedAt");

      return (
        <div>{updatedAt ? format(updatedAt as string, "dd/MM/yyyy") : "-"}</div>
      );
    },
    enableColumnFilter: false,
    meta: {
      label: "Updated At",
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
