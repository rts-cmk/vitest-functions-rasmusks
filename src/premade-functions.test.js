import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { findLongestWord, charCount, mergeSortedArrays, groupBy, debounce, flattenArray } from "./premade-functions.js"; 

describe("findLongestWord", () => {

    it("should recieve a string and return the longest word", () => {
        // TODO
        expect(findLongestWord("find the longest word")).toBe("longest")
    });

});

// Lav selv tests for de andre functions...

describe("charCount", () => {
    it("should recieve a string and return a object of numbers for each character", () => {
        expect(charCount("hello")).toStrictEqual({h: 1, e: 1, l: 2, o: 1})
    })
})

describe("mergeSortedArrays", () => {
    it("should recieve two sorted arrays and return a combined sorted array", () => {
        expect(mergeSortedArrays([1, 2, 3, 4, 5, 6], [7, 8, 9])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
    it("should recieve two backwards arrays and return a combined sorted array", () => {
        expect(mergeSortedArrays([5, 4, 3], [2, 1])).toStrictEqual([2, 1, 5, 4, 3])
    })
})

describe("flattenArray", () => {
    it("should recieve a nested array and return a flat array", () => {
        expect(flattenArray([1, 2, 3, 4, [5, 6]])).toStrictEqual([1, 2, 3, 4, 5, 6])
    })
})

describe("groupBy", () => {
    it("should recieve a array of objects and a property and return a object grouped by the property", () => {
    expect(groupBy([{doo: "coo", noo: "boo"},{doo: "coo", noo: "boo"}], "doo")).toStrictEqual({coo:[{doo: "coo", noo: "boo"},{doo: "coo", noo: "boo"}]})
    })
})

const mock = vi.fn()

describe("debounce", () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })
    afterEach(() => {
        vi.restoreAllMocks()
    })
    
    it("should recieve a function and delay and return a debounced version of the function", () => {
        const testFunction = debounce(mock, 1000)
        testFunction()
        expect(mock).not.toHaveBeenCalled()
        vi.advanceTimersByTime(1000)
        expect(mock).toHaveBeenCalledTimes(1)
    })
})