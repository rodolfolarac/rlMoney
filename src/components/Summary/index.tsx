import { Container } from "./styles";

import entrada from "../../assets/entradas.svg";
import saidas from "../../assets/saidas.svg";
import total from "../../assets/total.svg";

import { useContext } from "react";

import { TransactionContext } from "../../TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entrada} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={saidas} alt="Saidas" />
        </header>
        <strong>R$-500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={total} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
