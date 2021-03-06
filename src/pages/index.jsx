import * as React from "react";
import { Helmet } from "react-helmet";
import "./../stylesheets/index.sass";
import { useStaticQuery, graphql } from "gatsby";
import Head from "../components/head";
import Navigation from "../components/navigation";
import VisiMisi from "../components/visiMisi";
import Aktitivas from "../components/aktivitas";
import KenalKami from "../components/kenalKami";
import Prestasi from "../components/prestasi";
import Koncis from "../components/koncis";
import Founder from "../components/founder";
import TurutMisi from "../components/turutMisi";
import Footer from "../components/footer";
import ProgramStudi3Tahun from "../components/programStudi3Tahun";
import ProgramStudi3Bulan from "../components/programStudi3Bulan";
import Rekomendasi from "../components/rekomendasi";

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulKontenWebsite {
          judulAktivitas
          judulFounder
          judulMengenalKami
          judulProgramStudi3Tahun
          judulVisiMisi
          judul8KunciPenentu
          judulRekomendasi
          subtitleProgramStudi3Tahun {
            raw
          }
          konten8KunciPenentu {
            raw
          }
          kontenAlamat {
            raw
          }
          kontenFoto8KunciPenentu {
            file {
              url
            }
          }
          kontenFotoFounder {
            title
            file {
              url
            }
          }
          kontenFounder {
            raw
          }
          kontenKontak {
            raw
          }
          kontenMengenalKami {
            raw
          }
          judulPrestasi
          kontenPrestasi {
            description
            file {
              url
              fileName
              contentType
            }
          }
          kontenProgramStudi3Tahun {
            raw
          }
          kontenVisiMisi {
            raw
          }
          kontentFotoAktivitas {
            file {
              url
            }
          }
          kontenVideoVideoRekomendasi {
            file {
              url
            }
            description
          }
          kontenVideoVideoAktivitas {
            file {
              url
            }
            description
          }
        }
      }
    `
  );
  const { contentfulKontenWebsite: isi } = data;

  return (
    <>
      <Head />
      <Navigation />
      <VisiMisi content={isi} />
      <Aktitivas content={isi} />
      <Rekomendasi content={isi} />
      <KenalKami content={isi} />
      <Prestasi content={isi} />
      <ProgramStudi3Tahun />
      <ProgramStudi3Bulan />
      <Koncis content={isi} />
      <TurutMisi content={isi} />
      <Founder content={isi} />
      <Footer content={isi} />
    </>
  );
};

export default IndexPage;
