// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8HMNFKnEv7gJ55SbTqvTiU
// Component: u0YbhZ-njs
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
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_im_xbeanies.module.css"; // plasmic-import: 8HMNFKnEv7gJ55SbTqvTiU/projectcss
import sty from "./PlasmicUnclaimedListBox.module.css"; // plasmic-import: u0YbhZ-njs/css

export const PlasmicUnclaimedListBox__VariantProps = new Array(
  "claimedListBox"
);

export const PlasmicUnclaimedListBox__ArgProps = new Array();

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

function PlasmicUnclaimedListBox__RenderFunc(props) {
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
        path: "claimedListBox",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.claimedListBox
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
        sty.root,
        {
          [sty.rootclaimedListBox]: hasVariant(
            $state,
            "claimedListBox",
            "claimedListBox"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"image2"}
        data-plasmic-override={overrides.image2}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.image2
        )}
      >
        {"Image"}
      </div>

      <div
        data-plasmic-name={"uid"}
        data-plasmic-override={overrides.uid}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.uid)}
      >
        {"UID"}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "image2", "uid"],
  image2: ["image2"],
  uid: ["uid"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicUnclaimedListBox__ArgProps,
          internalVariantPropNames: PlasmicUnclaimedListBox__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicUnclaimedListBox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUnclaimedListBox";
  } else {
    func.displayName = `PlasmicUnclaimedListBox.${nodeName}`;
  }
  return func;
}

export const PlasmicUnclaimedListBox = Object.assign(
  // Top-level PlasmicUnclaimedListBox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    image2: makeNodeComponent("image2"),
    uid: makeNodeComponent("uid"),
    // Metadata about props expected for PlasmicUnclaimedListBox
    internalVariantProps: PlasmicUnclaimedListBox__VariantProps,
    internalArgProps: PlasmicUnclaimedListBox__ArgProps
  }
);

export default PlasmicUnclaimedListBox;
/* prettier-ignore-end */
