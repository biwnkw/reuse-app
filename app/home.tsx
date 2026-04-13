import { useRouter } from 'expo-router';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const produtos = [
  {
    id: 1,
    nome: 'Cadeira de Madeira',
    categoria: 'Móveis',
    preco: 'R$ 80,00',
    imagem: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    nome: 'Luminária Vintage',
    categoria: 'Decoração',
    preco: 'R$ 45,00',
    imagem: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    nome: 'Bicicleta Urbana',
    categoria: 'Mobilidade',
    preco: 'R$ 250,00',
    imagem: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    nome: 'Livros Seminovos',
    categoria: 'Educação',
    preco: 'R$ 20,00',
    imagem: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Home() {
  const router = useRouter();

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
              source={{ uri: produto.imagem }}
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
              {produto.nome}
            </Text>

            <Text
              style={{
                color: '#94a3b8',
                fontSize: 14,
                marginBottom: 4,
              }}
            >
              {produto.categoria}
            </Text>

            <Text
              style={{
                color: '#2ecc71',
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 12,
              }}
            >
              {produto.preco}
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