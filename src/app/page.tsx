import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/ui/textInput";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/ui/table";

const HomePage = () => {
  const columns = [
    {key: 'name', title: 'Name'},
    {key: 'age', title: 'Age'},
    {key: 'role', title: 'Role'}
  ]
  const data = [
    {age: 25, name: 'Joe', role: 'dev'},
    {age: 32, name: 'John', role: 'sales'}
  ]

  return (
    <div className="flex flex-col gap-1 divide-x-2">
      <div className="flex items-center gap-1 bg-slate-100">
        <Button variant="elevated" size="xs">Elevated</Button>
        <Button variant="plain" size="sm">Plain</Button>
        <Button variant="text">Text</Button>
        <Button variant="flat" size="lg">Flat</Button>
        <Button variant="outlined" size="xl">Outlined</Button>
      </div>
      <div className="flex gap-1">
        <Button variant="flat" size="md" prependIcon="FaHome">Prepend Icon</Button>
        <Button variant="flat" size="md" appendIcon="FaUser">Append Icon</Button>
      </div>
      <TextInput
        label="show"
        disabled={true}
        clearable={true}
      />
      <Checkbox />
      <DataTable data={data} columns={columns}>
      </DataTable>
    </div>
  );
};

export default HomePage;
