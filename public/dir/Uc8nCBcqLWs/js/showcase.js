/*! For license information please see showcase.js.LICENSE.txt */
        mutation tagUpdate($modelId: ID!, $mattertagId: ID! ${r} ${a}) {
          ${o?"patchMattertag(\n              modelId: $modelId, ,\n              mattertagId: $mattertagId,\n              patch: $patch) {\n                id\n              }":""}
          ${s?"removeMattertagMedia(\n              modelId: $modelId, ,\n              mattertagId: $mattertagId) {\n                id\n              }":""}
          ${n?"updateMattertagMediaUrl(\n              modelId: $modelId, ,\n              mattertagId: $mattertagId,\n              type: $mediaType,\n              url: $mediaUrl) {\n                id\n              }":""}
        }
        mutation sweep($modelId: ID!, $sweepId: ID! ${o} ${r}) {
        ${n?"\n          patchPanoLocation(modelId: $modelId, , locationId: $sweepId, patch: $pano) {\n            id\n            placement\n          }":""}
        ${s?"\n          patchAnchor(modelId: $modelId, , anchorId: $sweepId, patch: $anchor) {\n            id\n            tags\n          }":""}