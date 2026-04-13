import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import { Alert, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Perfil() {
  const [nome, setNome] = useState('');
  const [nomeSalvo, setNomeSalvo] = useState('');
  const [imagem, setImagem] = useState<string | null>(null);

  useEffect(() => {
    carregarNome();
  }, []);

  const salvarNome = async () => {
    if (nome.trim() === '') {
      Alert.alert('Atenção', 'Digite seu nome antes de salvar.');
      return;
    }

    await AsyncStorage.setItem('nomeUsuario', nome);
    setNomeSalvo(nome);
    setNome('');
  };

  const carregarNome = async () => {
    const valor = await AsyncStorage.getItem('nomeUsuario');
    if (valor) {
      setNomeSalvo(valor);
    }
  };

  const abrirCamera = async () => {
    const permissao = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissao.granted) {
      Alert.alert('Permissão necessária', 'Você precisa permitir o acesso à câmera.');
      return;
    }

    const resultado = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#0f172a',
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: 'bold',
          color: '#2ecc71',
          marginBottom: 8,
        }}
      >
        Meu Perfil
      </Text>

      <Text
        style={{
          fontSize: 15,
          color: '#cbd5e1',
          marginBottom: 25,
          textAlign: 'center',
        }}
      >
        Personalize sua experiência no app
      </Text>

      <View
        style={{
          width: '100%',
          backgroundColor: '#1e293b',
          padding: 20,
          borderRadius: 20,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: '#94a3b8', marginBottom: 8, fontSize: 14 }}>
          Seu nome
        </Text>

        <TextInput
          placeholder="Digite aqui..."
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#94a3b8"
          style={{
            backgroundColor: '#0f172a',
            color: '#fff',
            padding: 14,
            borderRadius: 12,
            marginBottom: 15,
            fontSize: 15,
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: '#2ecc71',
            padding: 14,
            borderRadius: 12,
            alignItems: 'center',
          }}
          onPress={salvarNome}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 16,
            }}
          >
            Salvar
          </Text>
        </TouchableOpacity>

        {nomeSalvo !== '' && (
          <Text
            style={{
              marginTop: 15,
              color: '#fff',
              fontSize: 16,
              textAlign: 'center',
            }}
          >
            Olá, {nomeSalvo} 💚
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#38bdf8',
          padding: 14,
          borderRadius: 14,
          width: '100%',
          alignItems: 'center',
        }}
        onPress={abrirCamera}
      >
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          Tirar Foto 📸
        </Text>
      </TouchableOpacity>

      {imagem && (
        <Image
          source={{ uri: imagem }}
          style={{
            width: 260,
            height: 260,
            borderRadius: 20,
            marginTop: 20,
          }}
        />
      )}
    </SafeAreaView>
  );
}