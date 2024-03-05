import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CardSemanal from "./src/componentes/cardSemana/index";

export default function App() {
  return (
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.textoPrincipal}>Rotina Semanal</Text>
      <CardSemanal
        imagemSemanal={require("./src/images/dormir.jpg")}
        descricao="Descrição: Dormir"
        horas="Horas: 52h"
        backgroundColor="blue"
      />
      <CardSemanal
        imagemSemanal={require("./src/images/refeicoes.jpg")}
        descricao="Descrição: Refeições (Café da manhã, almoço..)"
        horas="Horas: 7h"
        backgroundColor="#A79DF5"
      />
      <CardSemanal
        imagemSemanal={require("./src/images/transporte.jpg")}
        descricao="Descrição:    Transporte"
        horas="Horas: 4h"
        backgroundColor="#a9a9a9"
       />
      <CardSemanal
        imagemSemanal={require("./src/images/cuidadosPessoais.jpg")}
        descricao="Descrição: Cuidados Pessoais
         (Banho, lavar o rosto..)"
        horas="Horas: 6h"
        backgroundColor="#75DDF0"
       />
       <CardSemanal
        imagemSemanal={require("./src/images/estudar.jpg")}
        descricao="Descrição: Estudo"
        horas="Horas: 23h"
        backgroundColor="#cd5c5c"
       />
       <CardSemanal
        imagemSemanal={require("./src/images/etecRotina.jpg")}
        descricao="Descrição: Etec"
        horas="Horas: 26h"
        backgroundColor="#8b0000"
       />
        <CardSemanal
        imagemSemanal={require("./src/images/tarefasDomesticas.jpg")}
        descricao="Descrição: Tarefas Domésticas"
        horas="Horas: 5hr"
        backgroundColor="#008000"
       />
        <CardSemanal
        imagemSemanal={require("./src/images/lazer.jpg")}
        descricao="Descrição: Lazer (Jogar, Assistir...)"
        horas="Horas: 32h"
        backgroundColor="#6495ed"
       />
       <CardSemanal
        imagemSemanal={require("./src/images/livro.jpg")}
        descricao="Descrição: Ler livro"
        horas="Horas: 6h"
        backgroundColor="#008080"
       />
        <CardSemanal
        imagemSemanal={require("./src/images/guitarra.jpeg")}
        descricao="Descrição: Aprender Guitarra"
        horas="Horas: 5h"
        backgroundColor="#000080"
       />
       <Text style={styles.totalHoras}>Total de horas Semanais: 168h!</Text>
      </View >
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    gap: 20,
    marginBottom: 20,
    justifyContent: "flex-start",
  },
  textoPrincipal: {
    fontSize: 50,
    margin: 40,
  },
  totalHoras:{
    fontSize: 40,
    marginVertical: 10,
    fontWeight:'bold'
  }
});
