import React from "react";
import logo from "./assets/logo.svg";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function App() {
    const textbox = React.useRef<HTMLInputElement>(undefined);

    const countRef = React.useCallback((element: HTMLInputElement) => {
        if (element) element.value = "5";
        textbox.current = element;
    }, []);

    const onCreate = () => {
        const count = parseInt(textbox.current.value, 10);
        parent.postMessage({
            pluginMessage: { type: "create-rectangles", count }
        }, "*");
    };

    const onCancel = () => {
        parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
    };

    React.useEffect(() => {
        // This is how we read messages sent from the plugin controller
        window.onmessage = (event) => {
            const { type, message } = event.data.pluginMessage;
            if (type === "create-rectangles") {
                console.log(`Figma Says: ${message}`);
            }
        };
    }, []);

    return (

        <Card>
            <CardHeader>
                <CardTitle>Neutrals</CardTitle>
                <CardAction>
                    <Button variant="link">Sign Up</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <img src={logo} />
                <h2 className="text-2xl">Rectangle Creator</h2>
                <p>
                    Count: <Input />
                </p>
            </CardContent>
            <CardFooter className="flex-row items-end justify-end gap-2">
                <Button variant="outline" onClick={onCancel}>Cancel</Button>
                <Button id="create" onClick={onCreate}>Create</Button>
            </CardFooter>
        </Card>

    );
}

export default App;
