export function opetarionSelector() {

    const METRICS = {
        Distance: {
            to:
                'DistanceMeasurement'
            , metrics:
                [
                    'Kilometer',
                    'Hectometer',
                    'Meter',
                    'Decimeter',
                    'Centimeter',
                    'Milimeter'
                ],
            //  distance metrics
            Kilometer: {
                Kilometer: (km) => {
                    return km;
                },
                Hectometer: (km) => {
                    return km * 10;
                },
                Meter: (km) => {
                    return km * 1000;
                },
                Decimeter: (km) => {
                    return km * 10000;
                },
                Centimeter: (km) => {
                    return km * 100000;
                },
                Milimeter: (km) => {
                    return km * 1000000;
                }
            },
            Hectometer: {
                Hectometer: (hm) => {
                    return hm;
                },
                Meter: (hm) => {
                    return hm * 100;
                },
                Decimeter: (hm) => {
                    return hm * 1000;
                },
                Centimeter: (hm) => {
                    return hm * 10000;
                },
                Milimeter: (hm) => {
                    return hm * 100000;
                },
                Kilometer: (hm) => {
                    return hm * 0.1;
                },
            },
            Meter: {
                Meter: (m) => {
                    return m;
                },
                Decimeter: (m) => {
                    return m * 10;
                },
                Centimeter: (m) => {
                    return m * 100;

                },
                Milimeter: (m) => {
                    return m * 1000;
                },
                Kilometer: (m) => {
                    return m / 1000;
                },
                Hectometer: (m) => {
                    return m / 100;
                },
            },
            Decimeter: {
                Decimeter: (d) => {
                    return d
                },
                Centimeter: (d) => {
                    return d * 10;
                },
                Milimeter: (d) => {
                    return d * 100;
                },
                Kilometer: (d) => {
                    return d / 10000;
                },
                Hectometer: (d) => {
                    return d / 1000;
                },
                Meter: (d) => {
                    return d / 10;
                },
            },
            Centimeter: {
                Centimeter: (cm) => {
                    return cm;
                },
                Milimeter: (cm) => {
                    return cm * 10;
                },
                Kilometer: (cm) => {
                    return cm / 100000;
                },
                Hectometer: (cm) => {
                    return cm / 10000;
                },
                Meter: (cm) => {
                    return cm / 100;
                },
                Decimeter: (cm) => {
                    return cm / 10;
                },
            },
            Milimeter: {
                Milimeter: (mm) => {
                    return mm;
                },
                Kilometer: (mm) => {
                    return mm / 1000000;
                },
                Hectometer: (mm) => {
                    return mm / 10000;
                },
                Meter: (mm) => {
                    return mm / 1000;
                },
                Decimeter: (mm) => {
                    return mm / 100;
                },
                Centimeter: (mm) => {
                    return mm / 10;
                },
            },
        },
        Mass: {
            to: '/Mass',
            metrics: [
                'Kilogram',
                'Hectogram',
                'Decagram',
                'Gram',
                'Decigram',
                'Centigram',
                'Milligram'
            ],
            // mass metrics
            Kilogram: {
                Kilogram: (k) => {
                    return k;
                },
                Hectogram: (k) => {
                    return k * 100;
                },
                Decagram: (k) => {
                    return k * 100;
                },
                Gram: (k) => {
                    return k * 1000;
                },
                Decigram: (k) => {
                    return k * 10000;
                },
                Centigram: (k) => {
                    return k * 100000;
                },
                Milligram: (k) => {
                    return k * 1000000;
                },
            },
            Hectogram: {
                Hectogram: (h) => {
                    return h;
                },
                Decagram: (h) => {
                    return h * 10;
                },
                Gram: (h) => {
                    return h * 100;
                },
                Decigram: (h) => {
                    return h * 100;
                },
                Centigram: (h) => {
                    return h * 10000;
                },
                Milligram: (h) => {
                    return h * 100000;
                },
                Kilogram: (h) => {
                    return h / 10;
                },
            },
            Decagram: {
                Decagram: (d) => {
                    return d;
                },
                Gram: (d) => {
                    return d * 10;
                },
                Decigram: (d) => {
                    return d * 100;
                },
                Centigram: (d) => {
                    return d * 1000;
                },
                Milligram: (d) => {
                    return d * 10000;
                },
                Kilogram: (d) => {
                    return d / 100;
                },
                Hectogram: (d) => {
                    return d / 10;
                },
            },
            Gram: {
                Gram: (g) => {
                    return g;
                },
                Decigram: (g) => {
                    return g * 10;
                },
                Centigram: (g) => {
                    return g * 100;
                },
                Milligram: (g) => {
                    return g * 1000;
                },
                Kilogram: (g) => {
                    return g / 1000;
                },
                Hectogram: (g) => {
                    return g / 100;
                },
                Decagram: (g) => {
                    return g / 10;
                },
            },
            Decigram: {
                Decigram: (dg) => {
                    return dg;
                },
                Centigram: (dg) => {
                    return dg * 10;
                },
                Milligram: (dg) => {
                    return dg * 100;
                },
                Kilogram: (dg) => {
                    return dg / 10000;
                },
                Hectogram: (dg) => {
                    return dg / 1000;
                },
                Decagram: (dg) => {
                    return dg / 100;
                },
                Gram: (dg) => {
                    return dg / 10;
                },
            },
            Centigram: {
                Centigram: (c) => {
                    return c;
                },
                Milligram: (c) => {
                    return c * 10;
                },
                Kilogram: (c) => {
                    return c / 100000;
                },
                Hectogram: (c) => {
                    return c / 10000;
                },
                Decagram: (c) => {
                    return c / 1000;
                },
                Gram: (c) => {
                    return c / 100;
                },
                Decigram: (c) => {
                    return c / 10;
                },
            },
            Milligram: {
                Milligram: (m) => {
                    return m;
                },
                Kilogram: (m) => {
                    return m / 1000000;
                },
                Hectogram: (m) => {
                    return m / 100000;
                },
                Decagram: (m) => {
                    return m / 10000;
                },
                Gram: (m) => {
                    return m / 1000;
                },
                Decigram: (m) => {
                    return m / 100;
                },
                Centigram: (m) => {
                    return m / 10;
                },
            },
        },
        Electric: {
            to: 'ElectricIntencity',
            metrics: [
                'Watt',
                'Volt',
                'Amp',
                'Kilowatt',
                'VoltAmpere'
            ],
            // electric units
            Watt: {
                Watt: (w) => {
                    return w;
                },
                Volt: (w) => {
                    return w;
                },
                Amp: (w, p) => {
                    return w / p;
                },
                Kilowatt: (w) => {
                    return w / 1000;
                },
                VoltAmpere: (w, pf) => {
                    return w / pf;
                    // Watts (W) and volt-amperes (VA) are often considered equivalent for purely resistive loads in electrical circuits. In such cases, there is no phase shift, and the power factor is 1.
                    // For resistive loads:
                    // 1 watt (W) = 1 volt-ampere (VA)

                    // However, in situations with non-resistive loads or reactive power, the relationship between watts and volt-amperes can differ due to the power factor (PF) of the circuit. In those cases, you would need to consider the power factor to calculate the actual VA. The formula is as follows:

                    // VA (volt-amperes) = W (watts) / PF (power factor)

                    // Where:

                    // VA is the volt-amperes.
                    // W is the power in watts.
                    // PF is the power factor of the circuit.
                    // The power factor is typically a value between 0 and 1, representing the ratio of real power (watts) to apparent power (VA) in an electrical circuit.

                    // If you know the power factor of the circuit, you can use this formula to convert watts to volt-amperes for circuits with non-resistive loads. For purely resistive loads (power factor = 1), 1 watt is indeed equal to 1 volt-ampere.
                },
            },
            Volt: {
                Volt: (v) => {
                    return v;
                },
                Amp: (v) => {
                    return;
                },
                Kilowatt: (v) => {
                    return;
                },
                VoltAmpere: (v, r) => {
                    //                 The relationship between voltage(V) and current(A) in an electrical circuit is defined by Ohm's Law, which states:

                    //                 Voltage(V) = Current(A) × Resistance(Ω)

                    // If you know the voltage(V) and the resistance(Ω) in a circuit and want to find the current(A), you can rearrange Ohm's Law as follows:

                    // Current(A) = Voltage(V) / Resistance(Ω)

                    // So, to convert voltage to amperes, divide the voltage by the resistance. This relationship holds for resistive electrical circuits.

                    // Please note that this relationship is only applicable to resistive circuits, and the actual relationship between voltage and current may vary in circuits with different components, such as capacitors and inductors, which can introduce phase shifts and other complexities.
                    return v / r;
                },
                Watt: (v, a) => {

                    // The relationship between voltage (V), current (A), and power (Watts, W) in an electrical circuit is defined by the following formulas:

                    // Power (W) = Voltage (V) × Current (A)
                    // Voltage (V) = Power (W) / Current (A)
                    // So, to convert from voltage (V) to power (W), you can use the formula:

                    // Power (W) = Voltage (V) × Current (A)

                    // If you know the voltage and want to find the power, you'll also need to know the current in the circuit. These formulas apply to resistive electrical circuits.

                    // Keep in mind that the relationship between voltage, current, and power can vary depending on the specific circuit and its components. In simple resistive circuits, these formulas are accurate. However, more complex circuits with capacitors, inductors, and reactive elements may require additional considerations.
                    return v * a;
                },
            },
            Amp: {
                Amp: (a) => {
                    return a;
                },
                Kilowatt: (a, v, pf) => {
                    //                 Amps to Kilowatts (kW):

                    // To convert amperes to kilowatts, you need to know the voltage (V) in the circuit and the power factor (PF). Use the formula:
                    // Kilowatts (kW) = Volts (V) × Amperes (A) × Power Factor (PF) / 1000
                    return v * a * pf / 1000;
                },
                VoltAmpere: (a) => {
                    return a;
                },
                Watt: (a, v, pf) => {
                    //                 To convert amperes to watts, you need to know the voltage (V) and the power factor (PF) in the circuit. Use the formula:
                    // Watts (W) = Volts (V) × Amperes (A) × Power Factor (PF)
                    return v * a * pf;
                },
                Volt: (a, w, pf) => {
                    //                 To convert amperes to volts, you need to know the power (W) and the power factor (PF) in the circuit. Use the formula:
                    // Volts (V) = Watts (W) / (Amperes (A) × Power Factor (PF))
                    return w / a * pf;
                },
            },
            Kilowatt: {
                Kilowatt: (k) => {
                    return k;
                },
                VoltAmpere: (k, pf) => {
                    // To convert kilowatts to volt-amperes, you need to know the power factor (PF) in the circuit. Use the formula:
                    // Volt-Amperes (VA) = Kilowatts (kW) / Power Factor (PF)
                    return k / pf;
                },
                Watt: (k) => {
                    return k * 1000;
                },
                Volt: (k, a, pf) => {
                    return k / a * pf;
                    //                 To convert kilowatts to volts, you need to know the current (A) and the power factor (PF) in the circuit. Use the formula:
                    // Volts (V) = Kilowatts (kW) / (Amperes (A) × Power Factor (PF))
                },
                Amp: (k, a, pf) => {
                    //                 To convert kilowatts to amperes, you need to know the voltage (V) and the power factor (PF) in the circuit. Use the formula:
                    // Amperes (A) = Kilowatts (kW) / (Volts (V) × Power Factor (PF))
                    return k / a * pf;
                },
            },
            VoltAmpere: {
                VoltAmpere: (va) => {
                    return va;
                },
                Watt: (va, pf) => {
                    //                 To convert volt-amperes to watts, use the formula:
                    // Watts (W) = Volt-Amperes (VA) × Power Factor (PF)
                    return va * pf;
                },
                Volt: (va, a, pf) => {
                    //                 To convert volt-amperes to volts, you need to know the current (A) and the power factor (PF) in the circuit. Use the formula:
                    // Volts (V) = Volt-Amperes (VA) / (Amperes (A) × Power Factor (PF))
                    return va / a * pf;
                },
                Amp: (va, v, pf) => {
                    //                 To convert volt-amperes to amperes, you need to know the voltage (V) and the power factor (PF) in the circuit. Use the formula:
                    // Amperes (A) = Volt-Amperes (VA) / (Volts (V) × Power Factor (PF))
                    return va / v * pf;
                },
                Kilowatt: (va, pf) => {
                    //                 To convert volt-amperes to kilowatts, use the formula:
                    // Kilowatts (kW) = Volt-Amperes (VA) × Power Factor (PF) / 1000
                    return va * pf / 1000;
                },
            },
        },
        Temperature: {
            to: '/Temperature',
            metrics: [
                'Celsius',
                'Fahrenheit',
                'Kelvin',
                'Rankine'
            ],
            //units temperature  
            Celsius: {
                Celsius: (c) => {
                    return c;
                },
                Fahrenheit: (c) => {
                    return (c * 9 / 5) + 32;
                },
                Kelvin: (c) => {
                    return c + 273.15;
                },
                Rankine: (c) => {
                    return (c * 9 / 5) + 491.67;
                },
            },
            Fahrenheit: {
                Fahrenheit: (f) => {
                    return f;
                },
                Kelvin: (f) => {
                    return (f + 459.67) * 5 / 9;
                },
                Rankine: (f) => {
                    return f + 459.67;
                },
                Celsius: (f) => {
                    return (f - 32) * 5 / 9;
                },
            },
            Kelvin: {
                Kelvin: (k) => {
                    return k;
                },
                Rankine: (k) => {
                    return k * 9 / 5;
                },
                Celsius: (k) => {
                    return k - 273.15;
                },
                Fahrenheit: (k) => {
                    return (k * 9 / 5) - 459.67;
                },
            },
            Rankine: {
                Rankine: (r) => {
                    return r;
                },
                Celsius: (r) => {
                    return (r - 491.67) * 5 / 9;
                },
                Fahrenheit: (r) => {
                    return r - 459.67;
                },
                Kelvin: (r) => {
                    return r * 5 / 0;
                },
            },
        },
        Time: {
            to: '/Time',
            metrics: [
                'Horas',
                'Minutos',
                'Segundos',
            ],
            // time metrics
            Horas: {
                Horas: (h) => {
                    return h;
                },
                Minutos: (h) => {
                    return h * 60;
                },
                Segundos: (h) => {
                    return h * 3600;
                },
            },
            Minutos: {
                Minutos: (m) => {
                    return m;
                },
                Segundos: (m) => {
                    return m * 60;
                },
                Horas: (m) => {
                    return m / 60;
                },
            },
            Segundos: {
                Segundos: (s) => {
                    return s;
                },
                Horas: (s) => {
                    return s / 3600;
                },
                Minutos: (s) => {
                    return s / 60;
                },
            },
        }
    }

    this.getMetricTypes = () => {
        const metricsPaths = [];

        const metricUnity = Object.keys(METRICS);

        for (let i = 0; i < metricUnity.length; i++) {
            metricsPaths.push({
                type: metricUnity[i],
                path: METRICS[metricUnity[i]].to,
            });
        }

        return metricsPaths;

    }

    this.locateMetric = (metric) => {
        return metric in METRICS;
    }

    this.metricConverFormula = (metric, TypeMetric, calcOperation) => {
        if (this.locateMetric(metric)) {
            if (METRICS[metric] && METRICS[metric][TypeMetric]) {
                for (const unit in METRICS[metric][TypeMetric]) {
                    if (unit === calcOperation) {
                        return METRICS[metric][TypeMetric][unit];
                    }
                }
            }
        }
        return undefined; // Handle cases where the metric or operation doesn't exist
    }

    this.getMetricUnits = (metric) => {
        let metricList = METRICS[metric].metrics
        return metricList
    }

}
