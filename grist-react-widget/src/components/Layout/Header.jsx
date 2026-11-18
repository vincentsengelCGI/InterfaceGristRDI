import Header from "@codegouvfr/react-dsfr/Header";

export default function HeaderPage() {
  return (
    <Header
      brandTop={
        <>
          Ministère <br /> de l'Éducation
          <br /> nationale
        </>
      }
      homeLinkProps={{
        href: "#",
      }}
      serviceTitle="Robot RDI"
      serviceTagline="SemsiRH - RPA"
    />
  );
}
