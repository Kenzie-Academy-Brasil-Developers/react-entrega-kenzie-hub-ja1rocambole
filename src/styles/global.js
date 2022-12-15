import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;

    --color-green-sucess: #3FE864;
    --color-red-negative: #E83F5B;

}

body{ 
    background: var(--color-grey-4);
    font-family: 'Inter', sans-serif;
}

.display-none {
  display: none;
}

.container {
  padding: 0.6rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
`;
