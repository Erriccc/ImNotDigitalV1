// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8HMNFKnEv7gJ55SbTqvTiU
// Component: k4HYKP0cB3
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import RoundBlackButton from "../../RoundBlackButton"; // plasmic-import: 4PjNop8mQb/component
import RegisterWalletButton from "../../RegisterWalletButton"; // plasmic-import: 0SLk0MG_H_/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_im_xbeanies.module.css"; // plasmic-import: 8HMNFKnEv7gJ55SbTqvTiU/projectcss
import sty from "./PlasmicCommingSoonOrRegisterWallet.module.css"; // plasmic-import: k4HYKP0cB3/css

export const PlasmicCommingSoonOrRegisterWallet__VariantProps = new Array(
  "walletConnected"
);

export const PlasmicCommingSoonOrRegisterWallet__ArgProps = new Array(
  "connectedAddress"
);

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

function PlasmicCommingSoonOrRegisterWallet__RenderFunc(props) {
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
        path: "walletConnected",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.walletConnected
          : undefined
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return true ? (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootwalletConnected]: hasVariant(
            $state,
            "walletConnected",
            "walletConnected"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxwalletConnected]: hasVariant(
            $state,
            "walletConnected",
            "walletConnected"
          )
        })}
      >
        {(
          hasVariant($state, "walletConnected", "walletConnected")
            ? true
            : false
        )
          ? p.renderPlasmicSlot({
              defaultContents: "User Address",
              value: args.connectedAddress,
              className: classNames(sty.slotTargetConnectedAddress, {
                [sty.slotTargetConnectedAddresswalletConnected]: hasVariant(
                  $state,
                  "walletConnected",
                  "walletConnected"
                )
              })
            })
          : null}
      </div>

      {(
        hasVariant($state, "walletConnected", "walletConnected") ? true : true
      ) ? (
        <RoundBlackButton
          data-plasmic-name={"roundBlackButton"}
          data-plasmic-override={overrides.roundBlackButton}
          className={classNames("__wab_instance", sty.roundBlackButton, {
            [sty.roundBlackButtonwalletConnected]: hasVariant(
              $state,
              "walletConnected",
              "walletConnected"
            )
          })}
          onClick={async event => {
            const $steps = {};
            $steps["customFunction"] = true
              ? (() => {
                  const args = {
                    customFunction: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "customFunction",
                        interactionUuid: "Xl9MzjT-TA",
                        componentUuid: "k4HYKP0cB3",
                        argName: "customFunction"
                      },
                      () => () => {
                        return (window.location.href =
                          "https://www.imnotart.com");
                      }
                    )
                  };
                  return __wrapUserFunction(
                    {
                      type: "InteractionLoc",
                      actionName: "customFunction",
                      interactionUuid: "Xl9MzjT-TA",
                      componentUuid: "k4HYKP0cB3"
                    },
                    () =>
                      (({ customFunction }) => {
                        return customFunction();
                      })?.apply(null, [args]),
                    args
                  );
                })()
              : undefined;
            if (
              typeof $steps["customFunction"] === "object" &&
              typeof $steps["customFunction"].then === "function"
            ) {
              $steps["customFunction"] = await __wrapUserPromise(
                {
                  type: "InteractionLoc",
                  actionName: "customFunction",
                  interactionUuid: "Xl9MzjT-TA",
                  componentUuid: "k4HYKP0cB3"
                },
                $steps["customFunction"]
              );
            }
          }}
        />
      ) : null}
      {(
        hasVariant($state, "walletConnected", "walletConnected") ? true : true
      ) ? (
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            {
              [sty.textwalletConnected]: hasVariant(
                $state,
                "walletConnected",
                "walletConnected"
              )
            }
          )}
        >
          {"OR"}
        </div>
      ) : null}

      <RegisterWalletButton
        data-plasmic-name={"registerWalletButton"}
        data-plasmic-override={overrides.registerWalletButton}
        className={classNames("__wab_instance", sty.registerWalletButton, {
          [sty.registerWalletButtonwalletConnected]: hasVariant(
            $state,
            "walletConnected",
            "walletConnected"
          )
        })}
      />
    </p.Stack>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "roundBlackButton", "text", "registerWalletButton"],
  freeBox: ["freeBox"],
  roundBlackButton: ["roundBlackButton"],
  text: ["text"],
  registerWalletButton: ["registerWalletButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCommingSoonOrRegisterWallet__ArgProps,
          internalVariantPropNames:
            PlasmicCommingSoonOrRegisterWallet__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCommingSoonOrRegisterWallet__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCommingSoonOrRegisterWallet";
  } else {
    func.displayName = `PlasmicCommingSoonOrRegisterWallet.${nodeName}`;
  }
  return func;
}

export const PlasmicCommingSoonOrRegisterWallet = Object.assign(
  // Top-level PlasmicCommingSoonOrRegisterWallet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    roundBlackButton: makeNodeComponent("roundBlackButton"),
    text: makeNodeComponent("text"),
    registerWalletButton: makeNodeComponent("registerWalletButton"),
    // Metadata about props expected for PlasmicCommingSoonOrRegisterWallet
    internalVariantProps: PlasmicCommingSoonOrRegisterWallet__VariantProps,
    internalArgProps: PlasmicCommingSoonOrRegisterWallet__ArgProps
  }
);

export default PlasmicCommingSoonOrRegisterWallet;
/* prettier-ignore-end */
