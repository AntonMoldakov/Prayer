import React, {useMemo} from 'react'
import {
	View,
	Text
} from 'react-native'
import {useRoute, RouteProp} from '@react-navigation/native'

const Column = () => {
	const route = useRoute<RouteProp<any, 'Column'>>()
	const {columnId} = route.params
	const columns = [
		{deskId: 120, id: 15, deskTitle: 'Desk1', message: '1 task'},
		{deskId: 120, id: 13, deskTitle: 'Desk1', message: '3 fsdtask'},
		{deskId: 120, id: 152, deskTitle: 'Desk1', message: '4 edtask'},
		{deskId: 120, id: 11, deskTitle: 'Desk1', message: '5 fsdtask'},
		{deskId: 131, id: 13, deskTitle: 'Desk2', message: 'ha ha'},
		{deskId: 30, id: 17, deskTitle: 'Desk3', message: ' task 1'}
	]
	const filteredTasks = useMemo(() => columns.filter(column => column.deskId === columnId), [columns, columnId])
	return (
		<View>
			{filteredTasks.length > 0 ? filteredTasks.map(column => {
				return <Text key={column.id}>{column.message}</Text>
			}) : <Text>No tasks, create new!</Text>}
		</View>
	)
}

export default Column


