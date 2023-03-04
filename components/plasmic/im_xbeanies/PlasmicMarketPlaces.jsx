// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8HMNFKnEv7gJ55SbTqvTiU
// Component: sGix8KYNyE
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_im_xbeanies.module.css"; // plasmic-import: 8HMNFKnEv7gJ55SbTqvTiU/projectcss
import sty from "./PlasmicMarketPlaces.module.css"; // plasmic-import: sGix8KYNyE/css

export const PlasmicMarketPlaces__VariantProps = new Array();

export const PlasmicMarketPlaces__ArgProps = new Array();

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

function PlasmicMarketPlaces__RenderFunc(props) {
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
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"nfTmarkets"}
      data-plasmic-override={overrides.nfTmarkets}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.nfTmarkets
      )}
    >
      <div
        data-plasmic-name={"image1"}
        data-plasmic-override={overrides.image1}
        className={classNames(projectcss.all, sty.image1)}
      />

      <div
        data-plasmic-name={"image2"}
        data-plasmic-override={overrides.image2}
        className={classNames(projectcss.all, sty.image2)}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  nfTmarkets: ["nfTmarkets", "image1", "image2"],
  image1: ["image1"],
  image2: ["image2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMarketPlaces__ArgProps,
          internalVariantPropNames: PlasmicMarketPlaces__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicMarketPlaces__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "nfTmarkets") {
    func.displayName = "PlasmicMarketPlaces";
  } else {
    func.displayName = `PlasmicMarketPlaces.${nodeName}`;
  }
  return func;
}

export const PlasmicMarketPlaces = Object.assign(
  // Top-level PlasmicMarketPlaces renders the root element
  makeNodeComponent("nfTmarkets"),
  {
    // Helper components rendering sub-elements
    image1: makeNodeComponent("image1"),
    image2: makeNodeComponent("image2"),
    // Metadata about props expected for PlasmicMarketPlaces
    internalVariantProps: PlasmicMarketPlaces__VariantProps,
    internalArgProps: PlasmicMarketPlaces__ArgProps
  }
);

export default PlasmicMarketPlaces;
/* prettier-ignore-end */
