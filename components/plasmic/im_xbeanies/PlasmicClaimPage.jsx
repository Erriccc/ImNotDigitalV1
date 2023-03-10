// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8HMNFKnEv7gJ55SbTqvTiU
// Component: 2QbDyMolKpzt
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ImNotArtNav from "../../ImNotArtNav"; // plasmic-import: Xoe_b97VZI/component
import ClaimBeanieHeader from "../../ClaimBeanieHeader"; // plasmic-import: UgLYtY_iEg/component
import Uid from "../../Uid"; // plasmic-import: 7GW8h_hViQ/component
import CommingSoonOrRegisterWallet from "../../CommingSoonOrRegisterWallet"; // plasmic-import: k4HYKP0cB3/component
import ClaimButton from "../../ClaimButton"; // plasmic-import: SRxjb5uqQx/component
import ImNotArtFooter from "../../ImNotArtFooter"; // plasmic-import: 1zyzTuVyET/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_im_xbeanies.module.css"; // plasmic-import: 8HMNFKnEv7gJ55SbTqvTiU/projectcss
import sty from "./PlasmicClaimPage.module.css"; // plasmic-import: 2QbDyMolKpzt/css

export const PlasmicClaimPage__VariantProps = new Array();

export const PlasmicClaimPage__ArgProps = new Array();

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

function PlasmicClaimPage__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: true ? ({ $props, $state, $queries, $ctx }) => "" : undefined
      },
      {
        path: "unnamedGroupOfVariants",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) =>
              $props.unnamedGroupOfVariants
          : undefined
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"claimPageVertContainer"}
          data-plasmic-override={overrides.claimPageVertContainer}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.claimPageVertContainer
          )}
        >
          {true ? (
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <ImNotArtNav
                data-plasmic-name={"imNotArtNav"}
                data-plasmic-override={overrides.imNotArtNav}
                className={classNames("__wab_instance", sty.imNotArtNav)}
              />

              {true ? (
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"buttonStack"}
                  data-plasmic-override={overrides.buttonStack}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.buttonStack)}
                >
                  <ClaimBeanieHeader
                    data-plasmic-name={"claimBeanieHeader"}
                    data-plasmic-override={overrides.claimBeanieHeader}
                    className={classNames(
                      "__wab_instance",
                      sty.claimBeanieHeader
                    )}
                  />

                  <Uid
                    data-plasmic-name={"uid"}
                    data-plasmic-override={overrides.uid}
                    className={classNames("__wab_instance", sty.uid)}
                    uIdInput={"00:po:97:p0"}
                  />

                  {true ? (
                    <CommingSoonOrRegisterWallet
                      data-plasmic-name={"commingSoonOrRegisterWallet"}
                      data-plasmic-override={
                        overrides.commingSoonOrRegisterWallet
                      }
                      className={classNames(
                        "__wab_instance",
                        sty.commingSoonOrRegisterWallet
                      )}
                    />
                  ) : null}

                  <ClaimButton
                    data-plasmic-name={"claimButton"}
                    data-plasmic-override={overrides.claimButton}
                    className={classNames("__wab_instance", sty.claimButton)}
                  />

                  <div
                    data-plasmic-name={"pwrdImx"}
                    data-plasmic-override={overrides.pwrdImx}
                    className={classNames(projectcss.all, sty.pwrdImx)}
                  >
                    <div
                      data-plasmic-name={"poweredBy"}
                      data-plasmic-override={overrides.poweredBy}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.poweredBy
                      )}
                    >
                      {"Powered by "}
                    </div>

                    <div
                      data-plasmic-name={"image3"}
                      data-plasmic-override={overrides.image3}
                      className={classNames(projectcss.all, sty.image3)}
                    />
                  </div>
                </p.Stack>
              ) : null}

              <ImNotArtFooter
                data-plasmic-name={"imNotArtFooter"}
                data-plasmic-override={overrides.imNotArtFooter}
                className={classNames("__wab_instance", sty.imNotArtFooter)}
              />
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  claimPageVertContainer: [
    "claimPageVertContainer",
    "freeBox",
    "imNotArtNav",
    "buttonStack",
    "claimBeanieHeader",
    "uid",
    "commingSoonOrRegisterWallet",
    "claimButton",
    "pwrdImx",
    "poweredBy",
    "image3",
    "imNotArtFooter"
  ],

  freeBox: [
    "freeBox",
    "imNotArtNav",
    "buttonStack",
    "claimBeanieHeader",
    "uid",
    "commingSoonOrRegisterWallet",
    "claimButton",
    "pwrdImx",
    "poweredBy",
    "image3",
    "imNotArtFooter"
  ],

  imNotArtNav: ["imNotArtNav"],
  buttonStack: [
    "buttonStack",
    "claimBeanieHeader",
    "uid",
    "commingSoonOrRegisterWallet",
    "claimButton",
    "pwrdImx",
    "poweredBy",
    "image3"
  ],

  claimBeanieHeader: ["claimBeanieHeader"],
  uid: ["uid"],
  commingSoonOrRegisterWallet: ["commingSoonOrRegisterWallet"],
  claimButton: ["claimButton"],
  pwrdImx: ["pwrdImx", "poweredBy", "image3"],
  poweredBy: ["poweredBy"],
  image3: ["image3"],
  imNotArtFooter: ["imNotArtFooter"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicClaimPage__ArgProps,
          internalVariantPropNames: PlasmicClaimPage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicClaimPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "claimPageVertContainer") {
    func.displayName = "PlasmicClaimPage";
  } else {
    func.displayName = `PlasmicClaimPage.${nodeName}`;
  }
  return func;
}

export const PlasmicClaimPage = Object.assign(
  // Top-level PlasmicClaimPage renders the root element
  makeNodeComponent("claimPageVertContainer"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    imNotArtNav: makeNodeComponent("imNotArtNav"),
    buttonStack: makeNodeComponent("buttonStack"),
    claimBeanieHeader: makeNodeComponent("claimBeanieHeader"),
    uid: makeNodeComponent("uid"),
    commingSoonOrRegisterWallet: makeNodeComponent(
      "commingSoonOrRegisterWallet"
    ),

    claimButton: makeNodeComponent("claimButton"),
    pwrdImx: makeNodeComponent("pwrdImx"),
    poweredBy: makeNodeComponent("poweredBy"),
    image3: makeNodeComponent("image3"),
    imNotArtFooter: makeNodeComponent("imNotArtFooter"),
    // Metadata about props expected for PlasmicClaimPage
    internalVariantProps: PlasmicClaimPage__VariantProps,
    internalArgProps: PlasmicClaimPage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicClaimPage;
/* prettier-ignore-end */
