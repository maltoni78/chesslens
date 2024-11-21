import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function SavedGames() {
  const savedGames = [
    { id: 1, white: 'Player 1', black: 'Player 2', result: '1-0', date: '2023-08-01', event: 'Online Blitz' },
    { id: 2, white: 'Player 3', black: 'Player 4', result: '0-1', date: '2023-08-15', event: 'Club Tournament' },
    { id: 3, white: 'Player 5', black: 'Player 6', result: '½-½', date: '2023-08-22', event: 'Friendly Match' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Saved Games</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Players</TableHead>
              <TableHead>Result</TableHead>
              <TableHead>Event</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {savedGames.map((game) => (
              <TableRow key={game.id} className="hover:bg-secondary transition-colors">
                <TableCell>
                  <div>{game.white}</div>
                  <div className="text-muted-foreground">vs</div>
                  <div>{game.black}</div>
                </TableCell>
                <TableCell>
                  <Badge variant={game.result === '1-0' ? 'default' : game.result === '0-1' ? 'destructive' : 'secondary'}>
                    {game.result}
                  </Badge>
                </TableCell>
                <TableCell>{game.event}</TableCell>
                <TableCell>{game.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

