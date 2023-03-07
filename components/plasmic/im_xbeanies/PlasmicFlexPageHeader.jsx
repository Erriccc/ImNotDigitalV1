// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8HMNFKnEv7gJ55SbTqvTiU
// Component: NlSaXhOoqK
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
import sty from "./PlasmicFlexPageHeader.module.css"; // plasmic-import: NlSaXhOoqK/css

export const PlasmicFlexPageHeader__VariantProps = new Array(
  "unnamedGroupOfVariants"
);

export const PlasmicFlexPageHeader__ArgProps = new Array("flexPageHeaderText");

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

function PlasmicFlexPageHeader__RenderFunc(props) {
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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__yiLe
            )}
          >
            <React.Fragment>
              <React.Fragment>{"YOU'VE CLAIMED YOUR \n"}</React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ color: "#000000" }}
              >
                {"IMNOTART"}
              </span>
              <React.Fragment>{" BEANIE!"}</React.Fragment>
            </React.Fragment>
          </div>
        ),

        value: args.flexPageHeaderText,
        className: classNames(sty.slotTargetFlexPageHeaderText)
      })}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFlexPageHeader__ArgProps,
          internalVariantPropNames: PlasmicFlexPageHeader__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFlexPageHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFlexPageHeader";
  } else {
    func.displayName = `PlasmicFlexPageHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicFlexPageHeader = Object.assign(
  // Top-level PlasmicFlexPageHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicFlexPageHeader
    internalVariantProps: PlasmicFlexPageHeader__VariantProps,
    internalArgProps: PlasmicFlexPageHeader__ArgProps
  }
);

export default PlasmicFlexPageHeader;
/* prettier-ignore-end */
