import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A couple of shoes',
        amount: 29.90,
        date: new Date('08-01-2023')
    },
    {
        id: 'e2',
        description: 'A chocolate',
        amount: 3.00,
        date: new Date('08-02-2023')
    },
    {
        id: 'e3',
        description: 'Some books',
        amount: 15.50,
        date: new Date('08-03-2023')
    },
    {
        id: 'e4',
        description: 'A couple of gift',
        amount: 49.90,
        date: new Date('08-04-2023')
    },
    {
        id: 'e5',
        description: 'A computer',
        amount: 340.00,
        date: new Date('08-05-2023')
    }
]

function ExpensesOutput({expenses, expensesPeriod}) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
            <ExpensesList expenses={DUMMY_EXPENSES}/>
        </View>
    )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
})