import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import {
  useGetTasksQuery,
  useUpdateTaskMutation,
} from '../redux/services/apiSlice';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

// types
export interface Props {
  id: number;
  description: string;
  status: boolean;
}

const TasksList = () => {
  const { data, isError, error, status, isSuccess, isLoading } =
    useGetTasksQuery({});
  const [updateTask] = useUpdateTaskMutation();

  const handleUpdate = (payload: Props) => {
    updateTask(payload);
  };

  useEffect(() => {
    console.log('🔥 :', data);
  }, [data, isLoading]);

  if (isLoading) return <Text style={{ fontSize: 90 }}>Loading...</Text>;
  return (
    <View>
      <Text>TasksList</Text>
      {isError && (
        <View>
          <Text>Error: {JSON.stringify(error)} </Text>
          <Text>Status: {status}</Text>
        </View>
      )}
      {!error &&
        data?.map(
          (task: {
            id: number;
            title: string;
            description: string;
            status: boolean;
          }) => (
            <View style={{ flexDirection: 'row', gap: 10 }} key={task.title}>
              <Text>{task.title}</Text>
              <BouncyCheckbox
                isChecked={task.status}
                onPress={isChecked =>
                  handleUpdate({ ...task, status: isChecked })
                }
              />
            </View>
          ),
        )}
    </View>
  );
};
export default TasksList;
