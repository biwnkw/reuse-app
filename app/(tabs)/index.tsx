import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0f172a',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text
        style={{
          color: '#2ecc71',
          fontSize: 40,
          fontWeight: 'bold',
          marginBottom: 10,
        }}
      >
        ReUse! ♻️
      </Text>

      <Text
        style={{
          color: '#cbd5e1',
          fontSize: 16,
          textAlign: 'center',
          marginBottom: 40,
        }}
      >
        Dê uma nova vida aos seus objetos
      </Text>

      <TouchableOpacity
        onPress={() => router.push('/login')}
        style={{
          backgroundColor: '#2ecc71',
          paddingVertical: 14,
          paddingHorizontal: 35,
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          Começar
        </Text>
      </TouchableOpacity>
    </View>
  );
}