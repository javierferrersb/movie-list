interface DetailsRowProps {
  title: string;
  value: string;
}
function DetailsRow(props: DetailsRowProps) {
  return (
    <tr className="border-b align-top last:border-none dark:border-slate-400">
      <td className="px-4 py-2 font-bold">{props.title}</td>
      <td className="px-4 py-2">{props.value}</td>
    </tr>
  );
}
export default DetailsRow;
