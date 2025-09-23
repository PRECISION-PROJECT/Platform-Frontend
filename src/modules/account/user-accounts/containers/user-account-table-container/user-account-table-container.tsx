"use client";

import { DataTable } from "@/components/shared/data-table/data-table";
import { DataTableSkeleton } from "@/components/shared/data-table/data-table-skeleton";
import { DataTableToolbar } from "@/components/shared/data-table/data-table-toolbar";
import { useDataTable } from "@/hooks/use-data-table";
import { useUserAccountTable } from "../../hooks";
import { columns } from "./columns";

const UserAccountTableContainer = () => {
  const { pageCount, userList, isLoading } = useUserAccountTable();

  const { table } = useDataTable({
    data: userList,
    columns: columns,
    pageCount: pageCount,
    shallow: false,
  });

  if (isLoading) {
    return <DataTableSkeleton columnCount={5} rowCount={8} filterCount={2} />;
  }

  return (
    <DataTable table={table}>
      <DataTableToolbar table={table} />
    </DataTable>
  );
};

export default UserAccountTableContainer;
