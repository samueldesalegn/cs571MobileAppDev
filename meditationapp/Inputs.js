import { TextInput, View, Text, StyleSheet } from 'react-native'

export default function Inputs() {
	return (
		<View>
			<View style={styles.container}>
				<Text>Meditation</Text>
				<Text>Rest</Text>
			</View>
			<View style={styles.row}>
				<TextInput />
				<TextInput />
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column"
	}
})