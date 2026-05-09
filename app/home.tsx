import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Produto = {
  id: number;
  title: string;
  price: number;
  category: {
    name: string;
  };
  images: string[];
};

export default function Home() {
  const router = useRouter();

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [usandoCache, setUsandoCache] = useState(false);

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    try {
      const resposta = await fetch(
        'https://api.escuelajs.co/api/v1/products?offset=0&limit=8'
      );

      const dados = await resposta.json();

      setProdutos(dados);

      await AsyncStorage.setItem(
        'produtosCache',
        JSON.stringify(dados)
      );

      setUsandoCache(false);
    } catch {
      const cache = await AsyncStorage.getItem('produtosCache');

      if (cache) {
        setProdutos(JSON.parse(cache));
        setUsandoCache(true);
      }
    } finally {
      setCarregando(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f172a' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            color: '#2ecc71',
            marginBottom: 8,
            textAlign: 'center',
          }}
        >
          ReUse! ♻️
        </Text>

        <Text
          style={{
            color: '#cbd5e1',
            textAlign: 'center',
            marginBottom: 25,
            fontSize: 15,
          }}
        >
          Encontre objetos com uma nova vida
        </Text>

        <TouchableOpacity
          onPress={() => router.push('/perfil')}
          style={{
            backgroundColor: '#38bdf8',
            padding: 14,
            borderRadius: 12,
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>
            Ir para perfil
          </Text>
        </TouchableOpacity>

        {usandoCache && (
          <Text
            style={{
              color: '#facc15',
              textAlign: 'center',
              marginBottom: 16,
            }}
          >
            Exibindo produtos salvos no cache local
          </Text>
        )}

        {carregando && (
          <ActivityIndicator
            size="large"
            color="#2ecc71"
          />
        )}

        {produtos.map((produto) => (
          <View
            key={produto.id}
            style={{
              backgroundColor: '#1e293b',
              borderRadius: 20,
              padding: 15,
              marginBottom: 18,
            }}
          >
            <Image
              source={{ uri: produto.images?.[0] }}
              style={{
                width: '100%',
                height: 180,
                borderRadius: 14,
                marginBottom: 12,
              }}
            />

            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 4,
              }}
            >
              {produto.title}
            </Text>

            <Text
              style={{
                color: '#94a3b8',
                fontSize: 14,
                marginBottom: 4,
              }}
            >
              {produto.category?.name}
            </Text>

            <Text
              style={{
                color: '#2ecc71',
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 12,
              }}
            >
              R$ {produto.price}
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: '#2ecc71',
                padding: 12,
                borderRadius: 12,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                Ver produto
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}