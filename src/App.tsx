import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DashboardLayout from "./components/DashboardLayout"
import LandingPage from "./components/LandingPage"
import SignupPage from "./components/SignupPage"
import Overview from "./pages/Overview"
import SetBudget from "./pages/SetBudget"
import AddExpense from "./pages/AddExpense"
import ManageExpenses from "./pages/ManageExpenses"
import ExpenseReport from "./pages/ExpenseReport"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <DashboardLayout>
        <Routes>
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/set-budget" element={<SetBudget />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/manage-expenses" element={<ManageExpenses />} />
          <Route path="/expense-report" element={<ExpenseReport />} />
        </Routes>
      </DashboardLayout>
    </Router>
  )
}

export default App



