import { useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0f172a',
        padding: 20,
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: 'bold',
          color: '#2ecc71',
          marginBottom: 10,
        }}
      >
        ReUse! ♻️
      </Text>

      <Text
        style={{
          color: '#cbd5e1',
          marginBottom: 30,
        }}
      >
        Entre para continuar
      </Text>

      <View
        style={{
          backgroundColor: '#1e293b',
          padding: 20,
          borderRadius: 20,
        }}
      >
        <Text style={{ color: '#94a3b8', marginBottom: 5 }}>
          Email
        </Text>

        <TextInput
          placeholder="Digite seu email"
          placeholderTextColor="#94a3b8"
          style={{
            backgroundColor: '#0f172a',
            color: '#fff',
            padding: 14,
            borderRadius: 12,
            marginBottom: 15,
          }}
        />

        <Text style={{ color: '#94a3b8', marginBottom: 5 }}>
          Senha
        </Text>

        <TextInput
          placeholder="Digite sua senha"
          placeholderTextColor="#94a3b8"
          secureTextEntry
          style={{
            backgroundColor: '#0f172a',
            color: '#fff',
            padding: 14,
            borderRadius: 12,
            marginBottom: 20,
          }}
        />

        <TouchableOpacity
          onPress={() => router.push('/home')}
          style={{
            backgroundColor: '#2ecc71',
            padding: 14,
            borderRadius: 12,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}