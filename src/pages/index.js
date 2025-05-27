import MatchBookingCard from "@/components/cards/MatchBookingCard";
import Header from "../components/header/Header"
import ControlledForm from "../components/forms/ControlledForm";
import UncontrolledForm from "../components/forms/UncontrolledForm";
import Users from "../components/users/Users"
import RowCardsList from "@/layout/RowCardsList";

export default function Home() {

const matches = [
  {
    team1: "Liverpool",
    team2: "Manchester City",
    league: "Premier League",
    time: "8:15 PM",
    date: "Thu 07 Dec",
    stadium: "Anfield Stadium",
    price: "399"
  },
  {
    team1: "Real Madrid",
    team2: "Barcelona",
    league: "La Liga",
    time: "9:00 PM",
    date: "Sun 10 Dec",
    stadium: "Santiago Bernabéu",
    price: "450"
  },
  {
    team1: "Bayern Munich",
    team2: "Borussia Dortmund",
    league: "Bundesliga",
    time: "7:30 PM",
    date: "Sat 09 Dec",
    stadium: "Allianz Arena",
    price: "380"
  },
  {
    team1: "Juventus",
    team2: "AC Milan",
    league: "Serie A",
    time: "8:45 PM",
    date: "Mon 11 Dec",
    stadium: "Allianz Stadium",
    price: "420"
  },
  {
    team1: "Paris Saint-Germain",
    team2: "Marseille",
    league: "Ligue 1",
    time: "9:00 PM",
    date: "Fri 08 Dec",
    stadium: "Parc des Princes",
    price: "400"
  },
  {
    team1: "Chelsea",
    team2: "Arsenal",
    league: "Premier League",
    time: "6:30 PM",
    date: "Sat 09 Dec",
    stadium: "Stamford Bridge",
    price: "390"
  },
  {
    team1: "Inter Milan",
    team2: "Napoli",
    league: "Serie A",
    time: "7:45 PM",
    date: "Wed 06 Dec",
    stadium: "San Siro",
    price: "370"
  },
  {
    team1: "Atletico Madrid",
    team2: "Sevilla",
    league: "La Liga",
    time: "8:00 PM",
    date: "Tue 12 Dec",
    stadium: "Wanda Metropolitano",
    price: "365"
  },
  {
    team1: "Tottenham",
    team2: "Newcastle United",
    league: "Premier League",
    time: "7:15 PM",
    date: "Sun 10 Dec",
    stadium: "Tottenham Hotspur Stadium",
    price: "385"
  },
  {
    team1: "RB Leipzig",
    team2: "Eintracht Frankfurt",
    league: "Bundesliga",
    time: "5:00 PM",
    date: "Sat 09 Dec",
    stadium: "Red Bull Arena",
    price: "340"
  }
];



  return (
    <div>
      <Header/>
      {/* <MatchBookingCard matches={matches}/> */}
      <RowCardsList data={matches} Card={MatchBookingCard}/>
      <ControlledForm />
      <UncontrolledForm/>
      <Users />
    </div>
  );
}
