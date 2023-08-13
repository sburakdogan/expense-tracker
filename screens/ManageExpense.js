import { useContext, useLayoutEffect } from "react";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";

const { View, Text, StyleSheet } = require("react-native");

function ManageExpense({ route, navigation }) {
    const expensesCtx = useContext(ExpensesContext);
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    function deleteExpenseHandler() {
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
     }

    function cancelExpenseHandler() {
        navigation.goBack();
     }

    function confirmExpenseHandler() {
        if(isEditing) {
            expensesCtx.updateExpense(editedExpenseId, {description: 'updated description', amount: 40.00, date: new Date('2023-08-12') });
        } else {
            expensesCtx.addExpense({description: 'test description', amount: 80.00, date: new Date('2023-08-13')});
        }
        navigation.goBack();
     }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button onPress={cancelExpenseHandler} mode='flat' style={styles.button}>Cancel</Button>
                <Button onPress={confirmExpenseHandler} style={styles.button}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton name='trash' color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
                </View>
            )}
        </View>
    )
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
});