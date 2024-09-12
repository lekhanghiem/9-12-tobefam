import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  status: string,
  overview: string,
  deadline: string
) {
  return { name, overview, status, deadline };
}

const rows = [
  createData(
    "Marketplace for Smart Contract Templates",
    "Create a marketplace for developers that want to purchase or provide smart contract templates. With such a niche user base, it is important that the incentives of this application are crafted to support the desired dynamics.",
    "Open to applications",
    "April 1, 2024"
  ),
  createData(
    "Marketplace for Smart Contract Templates",
    "Create a marketplace for developers that want to purchase or provide smart contract templates. With such a niche user base, it is important that the incentives of this application are crafted to support the desired dynamics.",
    "Open to applications",
    "April 1, 2024"
  ),
  createData(
    "Marketplace for Smart Contract Templates",
    "Create a marketplace for developers that want to purchase or provide smart contract templates. With such a niche user base, it is important that the incentives of this application are crafted to support the desired dynamics.",
    "Open to applications",
    "April 1, 2024"
  ),
  createData(
    "Marketplace for Smart Contract Templates",
    "Create a marketplace for developers that want to purchase or provide smart contract templates. With such a niche user base, it is important that the incentives of this application are crafted to support the desired dynamics.",
    "Open to applications",
    "April 1, 2024"
  ),
];

export default function CustomTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750, padding: "20px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <p className="text-base font-thin text-primary-9">Project Name</p>
            </TableCell>
            <TableCell>
              <p className="text-base font-thin text-primary-9">Overview</p>
            </TableCell>
            <TableCell>
              <p className="text-base font-thin text-primary-9">RFP Status</p>
            </TableCell>
            <TableCell>
              <p className="text-base font-thin text-primary-9">
                Application Deadline
              </p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.overview}</TableCell>
              <TableCell className="max-w-[400px]">{row.status}</TableCell>
              <TableCell>{row.deadline}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
