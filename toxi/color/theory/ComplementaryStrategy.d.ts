import ColorList from "../ColorList";
import TColor from "../TColor";
import { ColorStrategyI } from "./strategies";

declare class ComplementaryStrategy implements ColorStrategyI {
    public createListFromColor(src: TColor): ColorList;

    public getName(): string;
    public toString(): string;
}

export = ComplementaryStrategy;