import { Document } from "./Document";
import { Layer } from "./Layer";
import * as Constants from "./Constants";
import { SubPathItems } from "./collections/SubPathItems";
import { SolidColor } from "./objects/SolidColor";
/**
 * @ignore
 */
export declare function PSPathItem(id: number, docId: number): PathItem;
/**
 * A path or drawing object, such as the outline of a shape or a straight or curved line,
 * which contains sub paths defining its geometry.
 *
 * Access through the collection in the [[Document.pathItems]] property. For example, this selects a named path item:
 *
 * ```
 * const currentPathItem = app.activeDocument.pathItems.getByName("myPath");
 * currentPathItem.select()
 * ```
 *
 * Create these objects by passing a set of SubPathInfo objects to the [[PathItems.add]]() method. This method creates
 * a [[SubPathItem]] object for each [[SubPathInfo]] object, and creates and returns a new [[PathItem]] object for the
 * path represented by all of the subpaths.
 *
 * *Added in Photoshop 23.3*
 */
export declare class PathItem {
    /**
     * @ignore
     */
    constructor(id: number, docId: number);
    /**
     * The class name of the referenced PathItem object
     */
    get typename(): string;
    /**
     * For use with batchPlay operations. This pathItem ID, along with its document ID
     * can be used to represent this pathItem for the lifetime of this document.
     */
    get id(): number;
    /**
     * The ID of the document of this pathItem.
     */
    get docId(): number;
    /**
     * Owner document
     */
    get parent(): Document;
    /**
     * The type of this path
     */
    get kind(): Constants.PathKind;
    set kind(kind: Constants.PathKind);
    /** Name of this path */
    get name(): string;
    set name(name: string);
    /**
     * The contained [[SubPathItem]]s in this path
     */
    get subPathItems(): SubPathItems;
    /**
     * Deselects this `pathItem` object.
     */
    deselect(): Promise<void>;
    /**
     * Duplicates the `pathItem` object with the new name, returning the duplicate.
     */
    duplicate(name?: string): Promise<PathItem>;
    /**
     * Fills the area enclosed by this path.
     *
     * `opacity` is a percentage, in the `[0.0 ... 100.0]` range.
     *
     * `feather` is in pixels, in the `[0.0 ... 250.0]` range.
     *
     * If `wholePath` is true, all subpaths are used when doing the fill.
     */
    fillPath(fillColor?: SolidColor, mode?: Constants.ColorBlendMode, opacity?: number, preserveTransparency?: boolean, feather?: number, wholePath?: boolean, antiAlias?: boolean): Promise<void>;
    /**
     * Makes this the clipping path for this document.
     *
     * `flatness` tells the PostScript printer how to approximate curves in the path.
     */
    makeClippingPath(flatness?: number): Promise<void>;
    /**
     * Makes a selection object whose border is this path.
     *
     * `feather` is in pixels, in the range [0.0...250.0]
     *
     * `operation`, by default, is `SelectionType.REPLACE`
     */
    makeSelection(feather?: number, antiAlias?: boolean, operation?: Constants.SelectionType): Promise<void>;
    /**
     * Deletes this object
     */
    remove(): Promise<void>;
    /**
     * Makes this the active or selected `PathItem` object
     */
    select(): Promise<void>;
    /**
     * Strokes the path with the specified tool
     *
     * `tool` is optional, and by default will use `ToolType.PENCIL`
     *
     * `simulatePressure` is false by default.
     *
     * If the tool is `ToolType.CLONESTAMP` or `ToolType.HEALINGBRUSH`, `sourceOrigin` must be provided as a
     * an object with x and y properties (in pixels) to indicate the location of the stroke source. `sourceLayer`
     * is optional, and by default will use the active layer in the document.
     *
     */
    strokePath(tool?: Constants.ToolType, simulatePressure?: boolean, sourceOrigin?: {
        x: number;
        y: number;
    }, sourceLayer?: Layer): Promise<void>;
}
