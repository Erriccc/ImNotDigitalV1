// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8HMNFKnEv7gJ55SbTqvTiU
// Component: Xoe_b97VZI
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import VerifiedToggle from "../../VerifiedToggle"; // plasmic-import: bjbftCrCDc/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_im_xbeanies.module.css"; // plasmic-import: 8HMNFKnEv7gJ55SbTqvTiU/projectcss
import sty from "./PlasmicImNotArtNav.module.css"; // plasmic-import: Xoe_b97VZI/css

export const PlasmicImNotArtNav__VariantProps = new Array();

export const PlasmicImNotArtNav__ArgProps = new Array();

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

function PlasmicImNotArtNav__RenderFunc(props) {
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
      data-plasmic-name={"nav"}
      data-plasmic-override={overrides.nav}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.nav
      )}
    >
      <p.PlasmicLink
        data-plasmic-name={"imNotArtNavLogo"}
        data-plasmic-override={overrides.imNotArtNavLogo}
        className={classNames(
          projectcss.all,
          projectcss.a,
          sty.imNotArtNavLogo
        )}
        component={Link}
        platform={"nextjs"}
      />

      {true ? (
        <VerifiedToggle
          data-plasmic-name={"verifiedToggle"}
          data-plasmic-override={overrides.verifiedToggle}
          className={classNames("__wab_instance", sty.verifiedToggle)}
        />
      ) : null}
    </div>
  ) : null;
}

const PlasmicDescendants = {
  nav: ["nav", "imNotArtNavLogo", "verifiedToggle"],
  imNotArtNavLogo: ["imNotArtNavLogo"],
  verifiedToggle: ["verifiedToggle"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicImNotArtNav__ArgProps,
          internalVariantPropNames: PlasmicImNotArtNav__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicImNotArtNav__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "nav") {
    func.displayName = "PlasmicImNotArtNav";
  } else {
    func.displayName = `PlasmicImNotArtNav.${nodeName}`;
  }
  return func;
}

export const PlasmicImNotArtNav = Object.assign(
  // Top-level PlasmicImNotArtNav renders the root element
  makeNodeComponent("nav"),
  {
    // Helper components rendering sub-elements
    imNotArtNavLogo: makeNodeComponent("imNotArtNavLogo"),
    verifiedToggle: makeNodeComponent("verifiedToggle"),
    // Metadata about props expected for PlasmicImNotArtNav
    internalVariantProps: PlasmicImNotArtNav__VariantProps,
    internalArgProps: PlasmicImNotArtNav__ArgProps
  }
);

export default PlasmicImNotArtNav;
/* prettier-ignore-end */
