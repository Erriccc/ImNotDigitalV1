// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8HMNFKnEv7gJ55SbTqvTiU
// Component: m4sIZxxOB6c
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import FlexPageHeader from "../../FlexPageHeader"; // plasmic-import: NlSaXhOoqK/component
import NftMintedCount from "../../NftMintedCount"; // plasmic-import: Ij7BXkTnkp/component
import VideoNft from "../../VideoNft"; // plasmic-import: bvKFXUs5yH/component
import Socials from "../../Socials"; // plasmic-import: lNF5F5pVlN/component
import MarketPlaces from "../../MarketPlaces"; // plasmic-import: sGix8KYNyE/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_im_xbeanies.module.css"; // plasmic-import: 8HMNFKnEv7gJ55SbTqvTiU/projectcss
import sty from "./PlasmicFlexPage2.module.css"; // plasmic-import: m4sIZxxOB6c/css
import Line1Icon from "./icons/PlasmicIcon__Line1"; // plasmic-import: 6RdOQRrPg/icon

export const PlasmicFlexPage2__VariantProps = new Array();

export const PlasmicFlexPage2__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFlexPage2__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  return true ? (
    <div
      data-plasmic-name={"rectangle3"}
      data-plasmic-override={overrides.rectangle3}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.rectangle3
      )}
    >
      {true ? (
        <div
          data-plasmic-name={"nav"}
          data-plasmic-override={overrides.nav}
          className={classNames(projectcss.all, sty.nav)}
        >
          <div
            data-plasmic-name={"imnotArt4"}
            data-plasmic-override={overrides.imnotArt4}
            className={classNames(projectcss.all, sty.imnotArt4)}
          />

          {true ? (
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pKgmm
                )}
              >
                {"Verified"}
              </div>

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__jvNwB)}
                displayHeight={"22px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"27px"}
                src={{
                  src: "/plasmic/im_xbeanies/images/greencheckjpeg.jpeg",
                  fullWidth: 360,
                  fullHeight: 360,
                  aspectRatio: undefined
                }}
              />
            </div>
          ) : null}
        </div>
      ) : null}
      {true ? (
        <div
          data-plasmic-name={"nftStack"}
          data-plasmic-override={overrides.nftStack}
          className={classNames(projectcss.all, sty.nftStack)}
        >
          <FlexPageHeader
            data-plasmic-name={"flexPageHeader"}
            data-plasmic-override={overrides.flexPageHeader}
            className={classNames("__wab_instance", sty.flexPageHeader)}
          />

          <NftMintedCount
            data-plasmic-name={"nftMintedCount"}
            data-plasmic-override={overrides.nftMintedCount}
            className={classNames("__wab_instance", sty.nftMintedCount)}
          />

          <VideoNft
            data-plasmic-name={"videoNft"}
            data-plasmic-override={overrides.videoNft}
            className={classNames("__wab_instance", sty.videoNft)}
          />
        </div>
      ) : null}
      {true ? (
        <div
          data-plasmic-name={"socialStack"}
          data-plasmic-override={overrides.socialStack}
          className={classNames(projectcss.all, sty.socialStack)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__trCd7
            )}
          >
            {"FLEX ON YOUR FRIENDS"}
          </div>

          <Socials
            data-plasmic-name={"socials"}
            data-plasmic-override={overrides.socials}
            className={classNames("__wab_instance", sty.socials)}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__tyfAy
            )}
          >
            <React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"View on Marketplaces"}
              </span>
            </React.Fragment>
          </div>

          <MarketPlaces
            data-plasmic-name={"marketPlaces"}
            data-plasmic-override={overrides.marketPlaces}
            className={classNames("__wab_instance", sty.marketPlaces)}
          />
        </div>
      ) : null}
      {true ? (
        <div
          data-plasmic-name={"footer"}
          data-plasmic-override={overrides.footer}
          className={classNames(projectcss.all, sty.footer)}
        >
          <Line1Icon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />

          <div
            data-plasmic-name={"imnotArt6"}
            data-plasmic-override={overrides.imnotArt6}
            className={classNames(projectcss.all, sty.imnotArt6)}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__yj7W
            )}
          >
            {"Copyright © 2022 imnotArt, LLC. All Rights Reserved."}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__nd1Xm
            )}
          >
            {"1010 N. Ashland, Chicago IL"}
          </div>

          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__i7JDc)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"151px"}
            src={{
              src: "/plasmic/im_xbeanies/images/ethDenverLogopng.png",
              fullWidth: 1008,
              fullHeight: 987,
              aspectRatio: undefined
            }}
          />
        </div>
      ) : null}
    </div>
  ) : null;
}

const PlasmicDescendants = {
  rectangle3: [
    "rectangle3",
    "nav",
    "imnotArt4",
    "freeBox",
    "nftStack",
    "flexPageHeader",
    "nftMintedCount",
    "videoNft",
    "socialStack",
    "socials",
    "marketPlaces",
    "footer",
    "svg",
    "imnotArt6"
  ],

  nav: ["nav", "imnotArt4", "freeBox"],
  imnotArt4: ["imnotArt4"],
  freeBox: ["freeBox"],
  nftStack: ["nftStack", "flexPageHeader", "nftMintedCount", "videoNft"],
  flexPageHeader: ["flexPageHeader"],
  nftMintedCount: ["nftMintedCount"],
  videoNft: ["videoNft"],
  socialStack: ["socialStack", "socials", "marketPlaces"],
  socials: ["socials"],
  marketPlaces: ["marketPlaces"],
  footer: ["footer", "svg", "imnotArt6"],
  svg: ["svg"],
  imnotArt6: ["imnotArt6"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFlexPage2__ArgProps,
          internalVariantPropNames: PlasmicFlexPage2__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFlexPage2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "rectangle3") {
    func.displayName = "PlasmicFlexPage2";
  } else {
    func.displayName = `PlasmicFlexPage2.${nodeName}`;
  }
  return func;
}

export const PlasmicFlexPage2 = Object.assign(
  // Top-level PlasmicFlexPage2 renders the root element
  makeNodeComponent("rectangle3"),
  {
    // Helper components rendering sub-elements
    nav: makeNodeComponent("nav"),
    imnotArt4: makeNodeComponent("imnotArt4"),
    freeBox: makeNodeComponent("freeBox"),
    nftStack: makeNodeComponent("nftStack"),
    flexPageHeader: makeNodeComponent("flexPageHeader"),
    nftMintedCount: makeNodeComponent("nftMintedCount"),
    videoNft: makeNodeComponent("videoNft"),
    socialStack: makeNodeComponent("socialStack"),
    socials: makeNodeComponent("socials"),
    marketPlaces: makeNodeComponent("marketPlaces"),
    footer: makeNodeComponent("footer"),
    svg: makeNodeComponent("svg"),
    imnotArt6: makeNodeComponent("imnotArt6"),
    // Metadata about props expected for PlasmicFlexPage2
    internalVariantProps: PlasmicFlexPage2__VariantProps,
    internalArgProps: PlasmicFlexPage2__ArgProps
  }
);

export default PlasmicFlexPage2;
/* prettier-ignore-end */
