import { AnomalyZoneBinder } from "@/mod/scripts/core/binders/AnomalyZoneBinder";
import { registerObject, unregisterObject } from "@/mod/scripts/core/database/objects";
import { registry } from "@/mod/scripts/core/database/registry";

/**
 * todo;
 */
export function registerAnomaly(anomaly: AnomalyZoneBinder): void {
  registry.anomalies.set(anomaly.object.name(), anomaly);
  registerObject(anomaly.object);
}

/**
 * todo;
 */
export function unregisterAnomaly(anomaly: AnomalyZoneBinder): void {
  registry.anomalies.delete(anomaly.object.name());
  unregisterObject(anomaly.object);
}
