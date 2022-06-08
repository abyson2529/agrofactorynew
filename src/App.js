import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Forgotpass from "./components/forgotpass";
import Resetpass from "./components/resetpass";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Fmarket from "./components/fmarket";
import Vegetables from "./components/fmarket/vegetables";
import Machinery from "./components/fmarket/machinery";
import Seeds from "./components/fmarket/seeds";
import Fruits from "./components/fmarket/fruits";
import Grains from "./components/fmarket/grains";
import Vege from "./components/fmarket/vege";
import Profile from "./components/profile";
import Sample from "./components/sample";
import Product_desc from "./components/product_desc";
import News from "./components/news";
import Aboutus from "./components/aboutus";
import Admin_pannel from "./components/admin_side/admin_pannel";
import Manage_cust from "./components/admin_side/manage_cust";
import Manage_far from "./components/admin_side/manage_far";
import Side_nav from "./components/admin_side/side_nav";
import Manage_ferti from "./components/admin_side/manage_ferti";
import Manage_mach from "./components/admin_side/manage_mach";
import Manage_seeds from "./components/admin_side/manage_seeds";
import Manage_fruits from "./components/admin_side/manage_fruits";
import Manage_vege from "./components/admin_side/manage_vege";
import Manage_grains from "./components/admin_side/manage_grains";
import Manage_news from "./components/admin_side/manage_news";
import Manage_agri from "./components/admin_side/manage_agri";
import Chat from "./components/ChatBot/Chat";
import Agri_class from "./components/agri_class";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgotpass" component={Forgotpass} />
          <Route path="/resetpass" component={Resetpass} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/fmarket" component={Fmarket} />
          <Route path="/vegetables" component={Vegetables} />
          <Route path="/machinery" component={Machinery} />
          <Route path="/seeds" component={Seeds} />
          <Route path="/fruits" component={Fruits} />
          <Route path="/grains" component={Grains} />
          <Route path="/vege" component={Vege} />
          <Route path="/profile" component={Profile} />
          <Route path="/sample" component={Sample} />
          <Route path="/product_desc" component={Product_desc} />
          <Route path="/news" component={News} />
          <Route path="/admin_pannel" component={Admin_pannel} />
          <Route path="/manage_cust" component={Manage_cust} />
          <Route path="/manage_far" component={Manage_far} />
          <Route path="/manage_ferti" component={Manage_ferti} />
          <Route path="/side_nav" component={Side_nav} />
          <Route path="/manage_mach" component={Manage_mach} />
          <Route path="/manage_seeds" component={Manage_seeds} />
          <Route path="/manage_fruits" component={Manage_fruits} />
          <Route path="/manage_vege" component={Manage_vege} />
          <Route path="/manage_grains" component={Manage_grains} />
          <Route path="/manage_news" component={Manage_news} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/Chat" component={Chat} />
          <Route path="/agri_class" component={Agri_class} />
          <Route path="/manage_agri" component={Manage_agri} />


        </Switch>
      </Router>
    </div>
  );
}

export default App;
